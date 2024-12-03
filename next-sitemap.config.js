/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://7th-house.net',
  generateRobotsTxt: false, // 既に作成済みのため
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_next/*', '/_error/*'],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const paths = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#features',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#tech',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#pricing',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#contact',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
    ]
    return paths
  },
} 