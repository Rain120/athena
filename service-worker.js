/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6907b6da01df48ccfeb360821c09e374"
  },
  {
    "url": "assets/css/0.styles.bbab9b24.css",
    "revision": "0e2917faa5d2763ec84d613faa0f04dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.699f228b.js",
    "revision": "aa11658ee3d475b978d957fb1c3e039f"
  },
  {
    "url": "assets/js/3.aca5151d.js",
    "revision": "8b9a0798c05f94cb242878b721605ef2"
  },
  {
    "url": "assets/js/4.0244e3cc.js",
    "revision": "58e737427eb2d645cbf7d35d65663f13"
  },
  {
    "url": "assets/js/5.462e6c9b.js",
    "revision": "30d790f8cd2a1cfa94290e2144785a0f"
  },
  {
    "url": "assets/js/6.05f31c77.js",
    "revision": "34dc728886fcd62e2e903e6757125514"
  },
  {
    "url": "assets/js/7.548646aa.js",
    "revision": "e6dceddd95aa7a664267eb244dc46d89"
  },
  {
    "url": "assets/js/8.736fb188.js",
    "revision": "e45bbf297a0877ceef495b329c85936e"
  },
  {
    "url": "assets/js/9.318f8d0e.js",
    "revision": "7ce2065d89aa3942823f13b8492d4101"
  },
  {
    "url": "assets/js/app.bcf764e6.js",
    "revision": "d16ff04f35a3875010468037fc7b2243"
  },
  {
    "url": "images/docs.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
