import { FaComments, FaPencilRuler, FaRobot, FaCode, FaCheckCircle } from 'react-icons/fa';

export const flowSteps = [
  {
    id: 1,
    title: 'ヒアリング',
    description: '客様のご要望や目的、予算、期間などを詳しくお伺いします。',
    icon: FaComments,
    duration: '1-2日',
    aiRole: 'ヒアリング内容を分析し、最適なレイアウトパターンを提案',
    humanRole: '詳細なニーズの把握と提案'
  },
  {
    id: 2,
    title: 'デザイン設計',
    description: 'ヒアリング内容を基にデザインの方向性を決定し、ワイヤーフレームを作成します。',
    icon: FaPencilRuler,
    duration: '3-5日',
    aiRole: 'デザイン候補の自動生成',
    humanRole: 'デザインの調整とブラッシュアップ'
  },
  {
    id: 3,
    title: 'AI活用開発',
    description: '最新のAIツールを活用し、効率的にコードを生成します。',
    icon: FaRobot,
    duration: '5-7日',
    aiRole: 'コード生成と基本実装',
    humanRole: 'コードレビューと品質管理'
  },
  {
    id: 4,
    title: '実装・調整',
    description: '生成されたコードを最適化し、細かな調整を行います。',
    icon: FaCode,
    duration: '3-5日',
    aiRole: 'コード最適化の提案',
    humanRole: 'カスタマイズと機能調整'
  },
  {
    id: 5,
    title: '納品・運用開始',
    description: '最終確認を行い、サイトを公開します。必要に応て運用サポートも提供します。',
    icon: FaCheckCircle,
    duration: '1-2日',
    aiRole: '自動テストと品質チェック',
    humanRole: '最終確認と公開作業'
  }
]; 