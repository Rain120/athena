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
    "revision": "524cc973d671c1ae926da9e154fd3a16"
  },
  {
    "url": "assets/css/0.styles.5242c732.css",
    "revision": "93d195b75d183b910b02f95ce0554a6e"
  },
  {
    "url": "assets/img/docs.77834bc4.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "assets/img/jsfiddle.3352b15e.png",
    "revision": "3352b15ed10c55480e358ac088778fea"
  },
  {
    "url": "assets/img/range-example-p-0-1.d636a4b1.svg",
    "revision": "d636a4b13a92822661562e3112d46257"
  },
  {
    "url": "assets/img/range-p-2-b-3-range.60df639c.svg",
    "revision": "60df639c79f422f40022c7633c1ce870"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selection-direction-backward.054877cc.svg",
    "revision": "054877ccf57a4a475fdf3ba3886bc6b3"
  },
  {
    "url": "assets/img/selection-direction-forward.2912c60a.svg",
    "revision": "2912c60aabd71e796ebeba2cc28a955e"
  },
  {
    "url": "assets/img/slack.99eb50f3.png",
    "revision": "99eb50f3a935a61b34da2203472caf32"
  },
  {
    "url": "assets/img/slate-slate@0.60.1.e211e889.png",
    "revision": "e211e88951de94081fbfc7b630b78a7c"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.ee49bfca.js",
    "revision": "062d78c916aa300638af5eff67484784"
  },
  {
    "url": "assets/js/11.018f407c.js",
    "revision": "eb38b51a5e46bf634b22ce1e148dee63"
  },
  {
    "url": "assets/js/12.9a4c72f3.js",
    "revision": "d050d38cfddff9d45ef083b2197eebec"
  },
  {
    "url": "assets/js/13.1d94f6dd.js",
    "revision": "c1185bb8090aa6513d4cb322b4e2b225"
  },
  {
    "url": "assets/js/14.f8cce967.js",
    "revision": "433371ed678c33cd27ff0d2d67d18c33"
  },
  {
    "url": "assets/js/15.149d4703.js",
    "revision": "fdffc5d9e917e890a97e0beae51ed825"
  },
  {
    "url": "assets/js/16.75468f53.js",
    "revision": "b1cac2edc9882160fde872e4f394cf45"
  },
  {
    "url": "assets/js/17.f426ee5f.js",
    "revision": "464f6e5198a46600e1ff78a66f9480e0"
  },
  {
    "url": "assets/js/18.60688021.js",
    "revision": "1e5c7be4e3f91be1cd46a5f206c75267"
  },
  {
    "url": "assets/js/19.5b0823e0.js",
    "revision": "ce95f4e146227a819053fe7b11e8d216"
  },
  {
    "url": "assets/js/20.1e128862.js",
    "revision": "64dd7644308c969319b828e8f8724ef4"
  },
  {
    "url": "assets/js/21.50715863.js",
    "revision": "71968f7e3ae2705ecaf2c4ff353db9a9"
  },
  {
    "url": "assets/js/22.ed5e69a2.js",
    "revision": "71fc1046c195d8e96ac2c75c691a59aa"
  },
  {
    "url": "assets/js/23.ba5a6fef.js",
    "revision": "a9f95e62d6f9c22079be6a993e1993da"
  },
  {
    "url": "assets/js/24.3b9f39bc.js",
    "revision": "86858eb1954176cd55e50ada9a7f6c25"
  },
  {
    "url": "assets/js/25.e489d4e0.js",
    "revision": "671178c82de8ab15938a45aac255eabe"
  },
  {
    "url": "assets/js/26.81e0fe71.js",
    "revision": "d394c50d40aa1a85119a6dea33c51e6a"
  },
  {
    "url": "assets/js/27.ac5332e4.js",
    "revision": "393bf53a785e446bdfe29a6d8aed32e3"
  },
  {
    "url": "assets/js/28.f055402e.js",
    "revision": "ce795e85150bf8caf563ff46093f7a8e"
  },
  {
    "url": "assets/js/29.671cd1e7.js",
    "revision": "a24d964707da0bb8657340804f639c07"
  },
  {
    "url": "assets/js/3.3fe69c75.js",
    "revision": "f70e85651b66963d1fcac89991e198e6"
  },
  {
    "url": "assets/js/30.86732ae7.js",
    "revision": "d0ebe47efa92237ee6bf97540614b93c"
  },
  {
    "url": "assets/js/31.e1a52668.js",
    "revision": "8e8a38c62356773a84183a54f4570fa2"
  },
  {
    "url": "assets/js/32.a6145ff0.js",
    "revision": "03df93dcdfa500dc85c10d235eeb56af"
  },
  {
    "url": "assets/js/33.067c436d.js",
    "revision": "b71f05513f2b16bae5d9bf6b9728ab49"
  },
  {
    "url": "assets/js/34.e13dd0c6.js",
    "revision": "beccbd9730515018b04908a0618c7986"
  },
  {
    "url": "assets/js/35.aeab9fff.js",
    "revision": "162ce2fcdd9b665598fea35620dc622e"
  },
  {
    "url": "assets/js/36.052f7a92.js",
    "revision": "28ca981b74714ddd2c6495e0f6012aad"
  },
  {
    "url": "assets/js/37.f7866384.js",
    "revision": "d020bbbc118bed1e9fd86b8158469327"
  },
  {
    "url": "assets/js/38.bb03e598.js",
    "revision": "e586fb335d60d8f478a149bd0ddd89b2"
  },
  {
    "url": "assets/js/39.9eda238b.js",
    "revision": "a3160e5dc582ff2c5490929afbe10a33"
  },
  {
    "url": "assets/js/4.0feb9656.js",
    "revision": "b8d07200656df3244ebce0146b0329e7"
  },
  {
    "url": "assets/js/40.41cbac8e.js",
    "revision": "5765e4d6cb663f89db3c18c2696ce4c1"
  },
  {
    "url": "assets/js/41.a1e100b0.js",
    "revision": "f8d2c5ebd1ac2decb2d476c9b6e8d212"
  },
  {
    "url": "assets/js/42.7234aad5.js",
    "revision": "5a8201fcd9cd2e8093dfd0bc5a85912d"
  },
  {
    "url": "assets/js/43.757e2a69.js",
    "revision": "5ecc6762c5cf491df4d72dceb8635cc7"
  },
  {
    "url": "assets/js/44.8605abbd.js",
    "revision": "bf9565f3d9eb034d964ea44f0005d4f4"
  },
  {
    "url": "assets/js/45.7db052dc.js",
    "revision": "bdb5d063d8433fe88ee04ed8b1e14160"
  },
  {
    "url": "assets/js/46.338d53f4.js",
    "revision": "106eae5ffdcf0281e25fa28fddb19257"
  },
  {
    "url": "assets/js/47.1195f478.js",
    "revision": "652d273196a25b3c442074e10e80307e"
  },
  {
    "url": "assets/js/48.8dbab1da.js",
    "revision": "4a03708fb9ef4a6a1bc860f0ce111234"
  },
  {
    "url": "assets/js/49.2bf8fdae.js",
    "revision": "e2f9c3a8bf7ce62762cbe4dbe5ac56d8"
  },
  {
    "url": "assets/js/5.c1773850.js",
    "revision": "ec3ba9825380bc78d2ca9705f29aa2ec"
  },
  {
    "url": "assets/js/50.76961f6c.js",
    "revision": "6c21112667f9c92d28fa03360cbe44d6"
  },
  {
    "url": "assets/js/51.bc3a9822.js",
    "revision": "2ef3b440b28e14663a456f334d6c9867"
  },
  {
    "url": "assets/js/52.bc284e3f.js",
    "revision": "38bf8d90ead876549bca49e5e5243481"
  },
  {
    "url": "assets/js/53.f7f55605.js",
    "revision": "5aa995d92c1df5d11e7b23e64b532e50"
  },
  {
    "url": "assets/js/54.4a21dded.js",
    "revision": "6c71f3649620ef6131c6e6f47f63d266"
  },
  {
    "url": "assets/js/55.eb9b26d4.js",
    "revision": "a42850316e578bf16253d9b71f4871c7"
  },
  {
    "url": "assets/js/56.b0e4e15f.js",
    "revision": "f6d8556bc295220fa894e094a2c3dbe0"
  },
  {
    "url": "assets/js/57.de548c33.js",
    "revision": "58db0dd92620cb1b670fdf5ac8d5a602"
  },
  {
    "url": "assets/js/58.88fb4995.js",
    "revision": "f743d67c32d1d40167b8e024353d6475"
  },
  {
    "url": "assets/js/59.f1cd47db.js",
    "revision": "a5a50accb02eaf99338754fb93b03a58"
  },
  {
    "url": "assets/js/6.3d52c07e.js",
    "revision": "8b190d7d553128beb12b5323d2939d03"
  },
  {
    "url": "assets/js/60.c43d370d.js",
    "revision": "dc57da60ca7e7e2e46504c4dbb77d3c1"
  },
  {
    "url": "assets/js/61.c30c72de.js",
    "revision": "1bb08a55325cbec3e61afcb386f96b79"
  },
  {
    "url": "assets/js/62.77d6203a.js",
    "revision": "ae58fcd0a370503b86ce34e479a06956"
  },
  {
    "url": "assets/js/63.deadbcb7.js",
    "revision": "ec68bd9fc5fe88bc9d07c11caffb82f1"
  },
  {
    "url": "assets/js/64.e8849100.js",
    "revision": "8db224b454922e9d32d6c13a820117cd"
  },
  {
    "url": "assets/js/65.bee6822f.js",
    "revision": "c2c6c482fabf96ae9f8a4e4a4e701114"
  },
  {
    "url": "assets/js/66.367ad459.js",
    "revision": "b6dea8daffb7c97dc14a5ecd16a38e94"
  },
  {
    "url": "assets/js/67.f16dbdc6.js",
    "revision": "244da397b3fcb248d24d13ab591185f4"
  },
  {
    "url": "assets/js/68.66a694bf.js",
    "revision": "cb457fce417a598f5749769c03dc6ed4"
  },
  {
    "url": "assets/js/69.875efcb9.js",
    "revision": "39bf8e5bfa53d7fcfa405356e6511311"
  },
  {
    "url": "assets/js/7.dcb2ed24.js",
    "revision": "b240ed90789a6beb36e64037027d08f6"
  },
  {
    "url": "assets/js/70.47463df2.js",
    "revision": "1907984c5a31adcff7703b60c6ae5b57"
  },
  {
    "url": "assets/js/71.34cc5262.js",
    "revision": "34899997fff5d1f03844fd7fe3143d95"
  },
  {
    "url": "assets/js/72.8f5c7c34.js",
    "revision": "77c77185503dd9f2f6f99d326de28b8f"
  },
  {
    "url": "assets/js/73.4e627e20.js",
    "revision": "cd7341503c3b13a600861cb0d6ba199f"
  },
  {
    "url": "assets/js/74.8f48771c.js",
    "revision": "60e4b204a9a044de611ce1e9e23d46fb"
  },
  {
    "url": "assets/js/75.00e52cff.js",
    "revision": "52779226497b008a5a5a3cfc9635e39d"
  },
  {
    "url": "assets/js/76.96cd48a4.js",
    "revision": "e6c9fb863e7248c1d79329598c32a627"
  },
  {
    "url": "assets/js/77.0a7f5a72.js",
    "revision": "192919cb195b8ffcbc45815d4c617b65"
  },
  {
    "url": "assets/js/78.96e5a070.js",
    "revision": "c85808df5f433a31b9bd8d8bc698c485"
  },
  {
    "url": "assets/js/79.ce231680.js",
    "revision": "46b6065953f7906648e08be23f05a0b3"
  },
  {
    "url": "assets/js/8.d7c00ec9.js",
    "revision": "d0cb08bdfcbcce1f0ed9e5d65fc195a2"
  },
  {
    "url": "assets/js/80.e184e823.js",
    "revision": "a8b036ed8b559b284b5497a7140a4fbd"
  },
  {
    "url": "assets/js/81.09ec0bef.js",
    "revision": "453319b6db0a823586bb2d31f0802aea"
  },
  {
    "url": "assets/js/9.b1f9d147.js",
    "revision": "b236c205f661347d96ff9daf88c78987"
  },
  {
    "url": "assets/js/app.94fc430e.js",
    "revision": "8dcd9d298e1ddcbdc6fa3ba04575c435"
  },
  {
    "url": "assets/js/vendors~docsearch.ec73a528.js",
    "revision": "6be673bab18086a18b86e3cb92174786"
  },
  {
    "url": "en/slate/api/locations.html",
    "revision": "136953e042a4689c99b04b2d1ae08c06"
  },
  {
    "url": "en/slate/api/miscellaneous.html",
    "revision": "e27965bc496440f90de07d9e58a9cc4c"
  },
  {
    "url": "en/slate/api/nodes.html",
    "revision": "7b37ddad87a3a6ecd29653509d303b37"
  },
  {
    "url": "en/slate/api/refs.html",
    "revision": "1c7fef0b6016aa7e7a840281d1adc88c"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "e9ff24e5372f0b8e2bb843a395a5cf50"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "efca0f2f513e1c57d0e4717091612a86"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "2a67c64dfdc47bce8ddf6a54e80aabb9"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "58670958fd256e5ed1d48f14cb1acd1f"
  },
  {
    "url": "en/slate/concepts/04-commands.html",
    "revision": "1a03e7ddfebfeecac0d460927cc5fed6"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "daf25ae34abdc8fe875caf9c7c1e1511"
  },
  {
    "url": "en/slate/concepts/06-editor.html",
    "revision": "01e288b802146e986133ed0800331aae"
  },
  {
    "url": "en/slate/concepts/07-plugins.html",
    "revision": "6ac57183ab6cc0dfc36256c8823f2c4b"
  },
  {
    "url": "en/slate/concepts/08-rendering.html",
    "revision": "3847be4a6fa7bd39d62b13955a34f484"
  },
  {
    "url": "en/slate/concepts/09-serializing.html",
    "revision": "0be8d113c4f8631e016d59e65965044c"
  },
  {
    "url": "en/slate/concepts/10-normalizing.html",
    "revision": "7c9baedd72c63ab0e405b156b79d06b9"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "348ad230d39c92d13f9f36601c533fd8"
  },
  {
    "url": "en/slate/Contributing.html",
    "revision": "cf747bde528eaa82b8f6199268d634fa"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "243a3ca6bfcf8124ec9d85c144258b3e"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "fc0291002b564a3bd31ff03101f3919f"
  },
  {
    "url": "en/slate/index.html",
    "revision": "e6345465240494bdaa2cee2e7de0d5cd"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "9afb13daac4bdf14ab231c56b9944cc7"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "c19af3bc49d1c6e3cfb3b45a20dde9d8"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "52d8bb5e4bc83af8fc968b683f1df6c8"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "b437c15d71d0d0aebedfcbc24c04186e"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "a41484dfa0bbab9dd9a81bf2d155b9a8"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "ba5ce1653f7ee6d4cb4e0ee29b0cae4e"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "d8990622b2a3ccc3adbcd0b6982df59f"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "e563f71f69a7798964e6b1da61f77d14"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "d7708d8eff25558aa344e7de6458ef8d"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "7a1a2ce5df10b363e063aed7c6125e6c"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "16afbe9d1e02eecdda5269a115c0b7e7"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "06b02614cc616da07888b501a9a0c2c4"
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
    "url": "index.html",
    "revision": "1683d5d4761be8509b8b037fbf7a65a6"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "23bf51a331ea624e834d9d4ef76275d1"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "2975ea67b5d258f3794f2258c04511a2"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "03d160fde833b9a66c1efbad5c4b710f"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "578dd14a3add3ddfde14a4a718a96bdf"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "ddc797511c1ecc4044b4376ff9627945"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "b3acc808f00e10780637529d5b687134"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "c235ddf02abb999bb2cb3711c4239157"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "722995abb1b1d3809f063710ea9a9f83"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "cad4e4e64ad01fb68bc574325fe37c1e"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "849e035c7c36f5b94f4db4f3549ad62f"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "d3f731078f139d9637276f22b83183cb"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "b689d5f8ea25a93272e299bb4ae2b042"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "712adc0ca57723ca45c6880a0e79c6a6"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "99cda37500a067cefd900fc64fee92c0"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "22fdb6b718523cc0cf6acea7873eeb9d"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "486526e8ca00cdf1473a82f301aacf7e"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "621019c59f2b6292a1eb2af928deeae0"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "d73caa3115fb0f15c243aabec7c658bd"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "7722274ab9bf94a6feca94e04dd814bc"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "35088b68c35fc950fd9e389c50ae6763"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "1dc44aba073958fbeec32156a8c8a716"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "4606118576361db40023ce5e512f7230"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "da19ae47ba610a735540662ce7698088"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "8b6bfcaac0eaa5f4bf1782fcd5a549ef"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "58ef4b6b0581445b728a5ce4b6ecc99d"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "65d9827a55bf93499a2e74a4fd64e1f2"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "1b16de5428247b9c6f7fc75c8c867cc6"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "c087510c3e2e5875edec67eb53d41f48"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "c33379cce08a66084b268df5a41bfcf7"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "a60f7aa7f2f084df530260de7a1e0a25"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "d5d240b5ad632540222ff33f317c92ff"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "6e1833fc53ee6d0b5463b08543b24118"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "58d5dfd7ddc561234ed332f592bbed58"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "437d604bdde3c10341228a6ffe2e0eb9"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "b55473612a88a806b31016afc33b7163"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "ba81f61d4f654fdafcab60acb03c9af5"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "8545f5bf40750c49584d6206d5f22fff"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "c9f7dd8e10bbb6ff8df0eed60ec984aa"
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
