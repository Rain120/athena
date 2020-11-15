const moment = require('moment');

const containers = [
	// 你可以多次使用这个插件
	[
		'vuepress-plugin-container',
		{
			type: 'right',
			defaultTitle: '',
		},
	],
	[
		'vuepress-plugin-container',
		{
			type: 'theorem',
			before: info => `<div class="theorem"><p class="title">${info}</p>`,
			after: '</div>',
		},
	],
	// 这是 VuePress 默认主题使用这个插件的方式
	[
		'vuepress-plugin-container',
		{
			type: 'tip',
			defaultTitle: {
				'/': 'TIP',
				'/zh/': '提示',
			},
		},
	],
];

module.exports = [
  ['@vuepress/back-to-top'],
  [
    '@vuepress/google-analytics',
    {
      ga: 'UA-153944249-1'
    }
  ],
  [
    '@vuepress/medium-zoom',
    {
      // selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16
      }
    }
  ],
  [
    'vuepress-plugin-awesome-gitalk',
    {
      home: false,
      ignorePaths: ['/zh/guide/'],
      gitalk: {
        clientID: '13f222b6ec6782dbe85f',
        clientSecret: '60984ee0c8926c160d2dc1a32e2769f2002e0a1b',
        repo: 'athena',
        owner: 'Rain120',
        admin: ['Rain120'],
        distractionFreeMode: true,
        language: 'zh-CN',
      }
    }
  ],
  ['@vuepress/pwa',
    {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        '/': {
          message: "官人, 人家又有新货了, 快来玩呀",
          buttonText: "我来啦"
        },
        '/zh/': {
          message: "官人, 人家又有新货了, 快来玩呀",
          buttonText: "我来啦"
        }
      }
    }
  ],
  ['@vuepress/blog'],
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }
	],
  [
    'vuepress-plugin-mathjax',
    {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
    },
  ],
	...containers,
];
