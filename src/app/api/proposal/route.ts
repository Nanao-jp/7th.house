import { NextResponse } from 'next/server';
import { generateProposal } from '@/utils/openai';
import rateLimit from '../config/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    console.log('Received request:', request.url);
    
    // IPアドレスを取得
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    console.log('Client IP:', ip);
    
    // レート制限をチェック
    await limiter.check(10, ip);

    // リクエストの検証
    const contentType = request.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: '不正なリクエスト形式です' },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log('Request body:', body);

    const { industry, features, atmosphere } = body;

    // パラメータの検証
    if (!industry || !features || !atmosphere) {
      console.log('Missing parameters:', { industry, features, atmosphere });
      return NextResponse.json(
        { error: '必要なパラメータが不足しています' },
        { status: 400 }
      );
    }

    // 入力値の検証
    if (
      typeof industry !== 'string' ||
      !Array.isArray(features) ||
      typeof atmosphere !== 'string' ||
      features.length === 0
    ) {
      console.log('Invalid parameter types:', {
        industry: typeof industry,
        features: Array.isArray(features),
        atmosphere: typeof atmosphere,
        featuresLength: features?.length
      });
      return NextResponse.json(
        { error: 'パラメータの形式が不正です' },
        { status: 400 }
      );
    }

    // OpenAI APIキーの確認
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing');
      return NextResponse.json(
        { error: 'APIの設定が不完全です' },
        { status: 500 }
      );
    }

    console.log('Starting proposal generation:', { industry, features, atmosphere });

    const proposal = await generateProposal({
      industry,
      features,
      atmosphere,
    });

    console.log('Generated proposal:', proposal);
    return NextResponse.json(proposal);
  } catch (error) {
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    if (error instanceof Error) {
      if (error.message === 'API rate limit exceeded') {
        return NextResponse.json(
          { error: 'リクエストの制限を超えました。しばらく待ってから再試行してください。' },
          { status: 429 }
        );
      }
      
      if (error.message.includes('OpenAI API')) {
        return NextResponse.json(
          { error: `OpenAI APIエラー: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: `エラー: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: '提案の生成中に予期せぬエラーが発生しました' },
      { status: 500 }
    );
  }
} 