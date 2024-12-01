export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  accent: string
  recommended?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'スタートプラン',
    price: '49,800～98,000',
    description: '手軽に始める1ページWebサイト',
    features: [
      'レスポンシブデザイン対応',
      'モダンなアニメーション演出',
      'お問い合わせフォーム設置',
      'SNSアカウント連携',
      'SEO基本対策',
      'AI文章校正サポート',
    ],
    accent: 'from-blue-500 to-purple-500',
    recommended: false,
  },
  {
    name: 'ベーシック',
    price: '98,000～198,000',
    description: '多機能な5ページのビジネスサイト',
    features: [
      'カテゴリー別ページ構成',
      '5ページまでのサイト制作',
      'ブログ機能・記事投稿',
      'お知らせ管理システム',
      'Googleアナリティクス連携',
      'AI画像生成サポート',
    ],
    accent: 'from-purple-500 to-pink-500',
    recommended: true,
  },
  {
    name: 'スタンダード',
    price: '148,000～298,000',
    description: '本格的な10ページの企業サイト',
    features: [
      '10ページまでのサイト制作',
      '予約・決済システム導入',
      '会員制システム構築',
      'メールマガジン配信',
      'カスタムAI機能2つ実装',
      'アクセス解析レポート',
    ],
    accent: 'from-pink-500 to-orange-500',
    recommended: false,
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  title: string
  items: FAQItem[]
}

export const faqData: FAQCategory[] = [
  {
    title: '料金について',
    items: [
      {
        question: '分割払いは可能ですか？',
        answer: 'はい、ご相談に応じて分割払いにも対応しております。お気軽にお問い合わせください。'
      },
      {
        question: '追加の修正費用は発生しますか？',
        answer: '制作期間中の修正は無償で対応いたします。納品後は運用プランに応じて対応いたします。'
      },
      {
        question: '見積もり後に料金は変わりますか？',
        answer: '基本的に見積もり時の料金から変更はありません。ただし、大幅な仕様変更があった場合は再度お見積もりさせていただきます。'
      }
    ]
  },
  {
    title: '制作について',
    items: [
      {
        question: '制作期間はどのくらいですか？',
        answer: 'プランにより異なりますが、スタートプランで約2週間、ベーシックで3-4週間、スタンダードで4-6週間が目安となります。'
      },
      {
        question: '納品後のサポートはありますか？',
        answer: 'はい。運用プランをご契約いただくと、定期的な更新や技術サポートをご提供いたします。'
      },
      {
        question: '自社で更新できるようになりますか？',
        answer: 'はい。管理画面の使い方をマニュアルと共にご説明いたします。必要に応じて運用サポートもご用意しております。'
      }
    ]
  }
] 