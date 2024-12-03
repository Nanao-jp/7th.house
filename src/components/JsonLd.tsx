import Script from 'next/script'

export const JsonLd = () => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '7th.House',
    url: 'https://7th-house.net',
    logo: 'https://7th-house.net/og-image.png',
    description: '最新技術を活用したWeb開発サービスを提供。スピーディーな開発、データに基づく提案、柔軟なカスタマイズで、あなたのビジネスをサポートします。',
    sameAs: [
      'https://twitter.com/Nanao_AI_Engr'
    ],
    founder: {
      '@type': 'Person',
      name: 'Nanao',
      jobTitle: 'フルスタックエンジニア / Webデザイナー'
    }
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: '7th.House'
    },
    serviceType: 'Web Development and AI Integration',
    areaServed: 'JP',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web開発サービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'スタートプラン',
            description: '手軽に始める1ページWebサイト'
          },
          priceRange: '¥49,800～¥98,000'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ベーシック',
            description: '多機能な5ページのビジネスサイト'
          },
          priceRange: '¥98,000～¥198,000'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'スタンダード',
            description: '本格的な10ページの企業サイト'
          },
          priceRange: '¥148,000～¥298,000'
        }
      ]
    }
  }

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '開発期間はどのくらいかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'プランによって異なりますが、スタートプランで約1週間、ベーシックプランで2-3週間、スタンダードプランで3-4週間程度です。ただし、具体的な機能やデザインの要望によって変動する場合があります。'
        }
      },
      {
        '@type': 'Question',
        name: 'AIの活用でどのようなメリットがありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI技術の活用により、開発スピードの向上、コストの削減、そして高度な機能の実装が可能になります。例えば、自動コンテンツ生成、ユーザー行動分析、カスタマーサポートの自動化などが実現できます。'
        }
      },
      {
        '@type': 'Question',
        name: '納品後のサポートはありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、納品後も継続的なサポートを提供しています。技術的なサポート、コンテンツの更新支援、セキュリティ対策など、お客様のニーズに応じたサポートプランをご用意しています。'
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}

export default JsonLd 