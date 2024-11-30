import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ProposalRequest = {
  industry: string;
  features: string[];
  atmosphere: string;
};

type ProposalResponse = {
  design: string;
  features: string[];
  aiStrengths: string[];
};

export async function generateProposal(
  request: ProposalRequest
): Promise<ProposalResponse> {
  try {
    console.log('Starting generateProposal with request:', request);
    console.log('API Key exists:', !!process.env.OPENAI_API_KEY);
    console.log('API Key prefix:', process.env.OPENAI_API_KEY?.substring(0, 8));

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const prompt = `あなたは親しみやすい口調のウェブサイトアドバイザーです！
「です・ます」調で、時々「～ですよ！」「～ましょう！」など明るい表現を使って提案してください！

基本情報:
業種: ${request.industry}
必要な機能: ${request.features.join(', ')}
重視する特徴: ${request.atmosphere}

以下の3つのセクションに分けて、具体的な提案を行ってください。
各セクションは「###」で区切ってください。

### ページ構成の提案 ###
「${request.atmosphere}」を活かしたサイトのページ構成を提案してください。
- トップページの構成
- 主要ページの内容
- 追加コンテンツの提案
を具体的に説明してください。

### 機能の提案 ###
基本機能の「${request.features.join(', ')}」に加えて、
「${request.atmosphere}」を活かした便利な機能を3つ以上提案してください。
各機能は「- 」で始まる箇条書きで記載してください。

### AIを使ったweb制作の強み ###
最新のAI技術を使ってウェブサイトを作ることで得られるメリットを、
専門用語を使わずに3つ以上説明してください。
以下のような観点で説明してください：
- 通常の制作に比べてどんなことが簡単になるか
- お客様の要望にどう応えられるか
- 制作期間や品質にどんな影響があるか

各メリットは「- 」で始まる箇条書きで、具体例を交えて説明してください。
例：「- デザインの修正が簡単！『ボタンの色を変えたい』『もっと写真を大きくしたい』といった要望にすぐに対応できます！」`;

    console.log('Sending prompt to OpenAI:', prompt);

    try {
      console.log('Calling OpenAI API...');
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        max_tokens: 1500,
      });

      const response = completion.choices[0]?.message?.content || '';
      
      console.log('OpenAI API Response received');
      console.log('Raw Response:', response);
      console.log('Response length:', response.length);

      // レスポンスをセクションごとに分割
      const sections = response.split('###').map(section => section.trim());
      console.log('Sections after split:', sections);
      
      // セクションのインデックスを取得
      const designIndex = sections.findIndex(s => s === 'ページ構成の提案');
      const featuresIndex = sections.findIndex(s => s === '機能の提案');
      const aiIndex = sections.findIndex(s => s === 'AIを使ったweb制作の強み');

      // セクションの内容を取得（セクション名の次の要素）
      const designSection = designIndex >= 0 ? sections[designIndex + 1] : '';
      const featuresSection = featuresIndex >= 0 ? sections[featuresIndex + 1] : '';
      const aiSection = aiIndex >= 0 ? sections[aiIndex + 1] : '';

      console.log('Extracted sections:', {
        design: designSection,
        features: featuresSection,
        ai: aiSection
      });

      // 箇条書きの項目を抽出（「- 」で始まる行を抽出）
      const extractBulletPoints = (text: string): string[] => {
        const points = text.split('\n')
          .map(line => line.trim())
          .filter(line => line.startsWith('-'))
          .map(line => line.trim());
        console.log('Extracted bullet points from text:', { text, points });
        return points;
      };

      const result = {
        design: designSection || 'ページ構成の提案を生成できませんでした。',
        features: extractBulletPoints(featuresSection).length > 0 
          ? extractBulletPoints(featuresSection)
          : ['機能の提案を生成できませんでした。'],
        aiStrengths: extractBulletPoints(aiSection).length > 0
          ? extractBulletPoints(aiSection)
          : ['AIでできることの説明を生成できませんでした。']
      };

      console.log('Final result:', result);
      return result;

    } catch (apiError) {
      console.error('OpenAI API Error:', apiError);
      throw apiError;
    }
  } catch (error) {
    console.error('Proposal generation error:', error);
    throw error;
  }
} 