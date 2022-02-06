const path = require('path');
const plugins = require('./utils/plugins');
const slugify = require('@vuepress/shared-utils').slugify

const SPECIAL_HEADINGS = {
  '!': 'exclamation',
  '?': 'question',
  '+ -': 'plus-and-minus',
};

module.exports = {
  // 替换成你的仓库名
  base: '/athena/',
  title: 'Athena',
  description: 'Welcome to the Athena',
  port: 9527,
  // dest: 'dist',
  // head 配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  // 别名配置
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, '../..'),
      }
    }
  },
  // chainWebpack:(config,isServer) =>{
  //   config.resolve.alias.set('@images',path.resolve(__dirname, '../../'))
  // },
  // markdown
  markdown: {
    lineNumbers: true,
    /**
     * 解决一个 "无实质内容的标题导致 permalink 出错" 的问题,
     * 目前发现有若干个有点问题的, 如 `!`
     *
     * @todo: 如果开始有多类似的个例, 可以引入特殊的 "heading anchor" 格式, 并统一处理
     *
     * 参考 : http://caibaojian.com/vuepress/config/#markdown-slugify
     *
     * @param {string} heading
     * @return {string|*|string}
     */
    slugify: heading => {
      const originResult = slugify(heading)

      const trimmedHeading = (heading || '').trim()
      if (trimmedHeading in SPECIAL_HEADINGS) {
        return SPECIAL_HEADINGS[(heading || '').trim()] || ''
      }
      return originResult
    },
    anchor: {
      permalink: true,
    },
    toc: {
      includeLevel: [1, 2],
    },
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-imsize'), { autofill: true });
    }
  },
  extraWatchFiles: [
    '.vuepress/nav/zh.js',
    '.vuepress/config.js',
    '.vuepress/utils/*',
    'zh/*'
  ],
  // 主题配置
  themeConfig: {
    theme: 'vue',
    repo: 'https://github.com/Rain120/athena',
    // repoLabel: 'Repo',

    // displayAllHeaders: true,
    // sidebar,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/guide/': [''],
          '/zh/slate/': require('./sidebar/slate'),
          '/zh/sharedb/': ['']
        }
      }
    },

    // polyfill IE
    evergreen: true,

    // search
    search: true,
    searchMaxSuggestions: 10,
    // 申请
    // https://docsearch.algolia.com/apply/
    // algolia: {
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // },

    // PWA
    serviceWorker: true,

    displayAllHeaders: true,

    smoothScroll: true,

    // footer
    date_format: 'yyyy-MM-dd',
    lastUpdated: 'Last Updated',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
  plugins
};
