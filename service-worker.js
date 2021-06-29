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
    "revision": "78b089ce4458605268fc617069a729f7"
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
    "url": "assets/js/34.0365ef04.js",
    "revision": "f7d4c179baf494f9d3849db4ceb5b940"
  },
  {
    "url": "assets/js/35.6228213f.js",
    "revision": "0ff48d122d26b6baebb33c02e59d2597"
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
    "url": "assets/js/48.d5434d60.js",
    "revision": "d767082151a641bf56f85bb653e3cf08"
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
    "url": "assets/js/71.4603f3a5.js",
    "revision": "57552ea4703bf0f973c0a550bf33a625"
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
    "url": "assets/js/app.cce28b12.js",
    "revision": "cba1ace824f0ad5784d82f58f78eb672"
  },
  {
    "url": "assets/js/vendors~docsearch.ec73a528.js",
    "revision": "6be673bab18086a18b86e3cb92174786"
  },
  {
    "url": "en/slate/api/locations.html",
    "revision": "937e27c81a854008c24d23d49e4290f6"
  },
  {
    "url": "en/slate/api/miscellaneous.html",
    "revision": "e1d818be441316c3ceb82afe8c59aa46"
  },
  {
    "url": "en/slate/api/nodes.html",
    "revision": "98e173130f2bc882edb0ca4cc5a7978f"
  },
  {
    "url": "en/slate/api/refs.html",
    "revision": "a01bd05310e058fbc11858167e46b42e"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "b2f552c18be3a155b8ad35325511ad38"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "f5242fb198555da9ca21c6630ec5a60b"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "abbec0880041e3e9bb89cbbee42f1ad5"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "46f4e19e384ab47f5442f0e842e916fe"
  },
  {
    "url": "en/slate/concepts/04-commands.html",
    "revision": "5698bdc3ecff1c5fccfbfd1be636c7ba"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "5f3880c0ce9d46ee1a53986b30362589"
  },
  {
    "url": "en/slate/concepts/06-editor.html",
    "revision": "9139d87b8e9c29ea56d740aa3cfd061d"
  },
  {
    "url": "en/slate/concepts/07-plugins.html",
    "revision": "f4c92cc77897fe9795a7da97b1cb4f58"
  },
  {
    "url": "en/slate/concepts/08-rendering.html",
    "revision": "47819132b39c537ac28a6005d1d12da2"
  },
  {
    "url": "en/slate/concepts/09-serializing.html",
    "revision": "700f432ee999cbc011c3cb0440fe896c"
  },
  {
    "url": "en/slate/concepts/10-normalizing.html",
    "revision": "b91bf4dd4899c01da106239fee6aa845"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "e1ff16de5efe2e29dc36480ff5155f29"
  },
  {
    "url": "en/slate/Contributing.html",
    "revision": "78a7ef5162bfb169e18a7471b682c924"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "221ca5563036800ea7fcee49cfb4da95"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "af99cc841a67984405b9ffe2aaa714c3"
  },
  {
    "url": "en/slate/index.html",
    "revision": "c11e9699ba6ca4d8c3c3f00247103174"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "a81928257199374ac75cb4659b534632"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "a4146ee7ec68eeb9cca317508c782b37"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "8f9030ea7b1410e16260b05a90210858"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "7d0967d5e0662af370c072833b39cae3"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "577d55e73f677715c55bc6002f3b8545"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "c3afccc7e11b26720b204c764a34a6ad"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "a2c01cbec4f939c8514a6fcd550afe5e"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "84ae52e0bdccb7616790c41e6882f4c8"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "4453c4e3818056a599eaf5f27a3e1734"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "a2d8c8f8e20708fcbf22f26aff2574d7"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "3056a43d032a36163613bafcc5f8cf40"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "c732aa756b78123367bac663cd330319"
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
    "revision": "4b500024be22f772a22530e044810904"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4208718dc7f205257a2d7b4ebdcd5292"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "86bee397fe7c305559a1d2d90b8b9f04"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "368898a027d8ac35821e45e2840c71b0"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "6a379570525843501027ec5d0d649648"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "2d2a3a374d352159cc6d279fdb01a9ab"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "d45f91e93d50c491740b3715bdefdccb"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "fc080284359ac49f0f92bbe791347830"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "ceb0684cb015da36217e7a4e9cbe15b0"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "45953f4fc9f57aecfe5e62abc7d1ed3e"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "a0d5bf5528e3e9fe8a8decd3e7ea95e0"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "debc2ec8daeadd34c67000dcc595b1e1"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "a04445173b376d5a144a870c65014a07"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "2349215fa2402a0f33d72ff55fac2e8f"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "01d9673ff202c7c1f5acddaf34922340"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "11b7db62ac96856f8d5c256f06ad9458"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "3ca03202ae9e80f7fe36eb958a4bb704"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "9ddb6537951677d209babaac037ab215"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "dc6c4d81988cb1dcb390ffad68604117"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "d84c0eba9455c54d25401aae99e36436"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "e43e05ac447793b2b88cade04c2a35c5"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "8b5ed5ca189a5f8d6e4eba6211e0b75d"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "7f16bd1edbce3c702bdcc538b853818d"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "7420e685436ace4051980e250893a89b"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "16e884cc5ee3e4538bd375491ef4a335"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "bb4245f8c6d8ba133a81f7cb4eaa1d43"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "d4aaf27de202d911cec03bb166ee19a6"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "cde2a501764c72b1f62aa999a37d0847"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "5454f03b1976b1c60e779b45731b1673"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "1f77a6aac0b670d6b22a4ca427a385d8"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "d0cda18400305c02eb3972148b03b075"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "3139eeb9626f049871211aa4f8ebd005"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "24c8429bd2a78017f3a9fd6550f6bfdc"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "06ec6c03511332e4e1b88e5fd5c239b5"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "23c40abd9a2a1bb246beb7abd99d43f3"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "05f86ce026e47c92c21933b22c77995f"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "9879ef2f0f9e028d11318a0912881104"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "aad03a481b3d73f6facb1239152b1d70"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "57b8fcdbe11398e2db644c9d7c185549"
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
