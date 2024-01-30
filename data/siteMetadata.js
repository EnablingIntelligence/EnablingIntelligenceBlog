/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Enabling Intelligence',
  author: 'Christopher Schicho',
  headerTitle: 'Enabling Intelligence',
  description: 'Artificial Intelligence, Machine Learning, Mathematics and more',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.enabling-intelligence.com',
  siteRepo: 'https://github.com/EnablingIntelligence/EnablingIntelligenceBlog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/banner-big.png',
  email: 'contact@enabling-intelligence.com',
  github: 'https://github.com/EnablingIntelligence',
  youtube: 'https://www.youtube.com/channel/UC703ajCWfN24OexczYmR_jg',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
