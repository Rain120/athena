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
    "revision": "08fdd69f2e0a05c9aad018fa3c400b72"
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
    "url": "assets/js/17.03d9c738.js",
    "revision": "b56e3d3f9371b1137388a9e4effcfc7c"
  },
  {
    "url": "assets/js/18.626b97ac.js",
    "revision": "53d949fdede2d88b36543c23b54929ba"
  },
  {
    "url": "assets/js/19.2b785211.js",
    "revision": "50ffeb85d1316186d510682f16409de0"
  },
  {
    "url": "assets/js/20.7afde942.js",
    "revision": "7762b7e8fef571361c53c129d487e0f4"
  },
  {
    "url": "assets/js/21.738c9c5e.js",
    "revision": "ac8f41bb96a8e0c983453ab5fac7f055"
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
    "url": "assets/js/app.76cc6b1d.js",
    "revision": "2f883bc3452f380dc40e998cf0379ee6"
  },
  {
    "url": "assets/js/vendors~docsearch.ec73a528.js",
    "revision": "6be673bab18086a18b86e3cb92174786"
  },
  {
    "url": "en/slate/api/locations.html",
    "revision": "2aa271eff5e6ce4d9866f518ef5cf5c2"
  },
  {
    "url": "en/slate/api/miscellaneous.html",
    "revision": "3cb5fb2e06e5df445f2dcf42f05864cc"
  },
  {
    "url": "en/slate/api/nodes.html",
    "revision": "ea088a2e772a0b5be8338db72a5c097a"
  },
  {
    "url": "en/slate/api/refs.html",
    "revision": "4767611767682d132c176e40c6bd8904"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "33fdd1652cc003c7ce79bb0ce4f489ff"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "fb99c9a6c9dd3e9803b60fc186fbc94b"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "85a5a6c1409fd47bbe5fd61a8b163158"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "26ed4a60d9791ca43f0a0be62c0f4a99"
  },
  {
    "url": "en/slate/concepts/04-commands.html",
    "revision": "655f686a4643f36d02bda42e63c6a7c5"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "dda1b54feb9054776800bfbee92843da"
  },
  {
    "url": "en/slate/concepts/06-editor.html",
    "revision": "6e92f89d76d1a8aca5091ee29adf9766"
  },
  {
    "url": "en/slate/concepts/07-plugins.html",
    "revision": "0f48b251cbcec73cb69cfb4c3e7abf37"
  },
  {
    "url": "en/slate/concepts/08-rendering.html",
    "revision": "f9e8dc3d4b6afee9abb0d5adb538e31a"
  },
  {
    "url": "en/slate/concepts/09-serializing.html",
    "revision": "d277de85a1c3df8d8711006c131ae9a8"
  },
  {
    "url": "en/slate/concepts/10-normalizing.html",
    "revision": "bc60452e86051ec679f8b07080439089"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "77336ddb90dee8c05cf38f63525501c9"
  },
  {
    "url": "en/slate/Contributing.html",
    "revision": "93f0011736de188f51cf2e6bf7f20381"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "3c0e2cc27b673482158e4b3bf6698c27"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "cf36966860ec1d0795c39a42b50e944f"
  },
  {
    "url": "en/slate/index.html",
    "revision": "14a7e9f8882fa4ff8dec1f9699cb1549"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "de39281ac54618d15fe7ca2ca41148d8"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "9a4d23f092518836c7864f94fb54db08"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "d6a0954f5e8fe3cdf9b679d1d70f2200"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "e841bddc3490186c34c9a4199046c12a"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "26230abe6f614e18c6156be104fa5d56"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "4cf993e4fe7b688bd6562a3f7c39f991"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "547c6c4d65df5e2419f0d87e1791afea"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "481a0108f94e467962a6cb481e8b4366"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "8fa5acfdfb6eec3eb34d5677d9aff734"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "378d46b6221cfe2ca6c75c1649eb4408"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "16ac5b02b9bdb361788487bad53ed4db"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "383eb7ec39640e336fcb1eb005275b12"
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
    "revision": "619e67fdd80388521db56c02624e68a4"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "6514ba44196194c2e59b1bf63648a7b9"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "32a137bab4d694c5eac2ee047fa3496a"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "18b0bc6c89302f60e4d1414470b04266"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "84aa3ecc3b33d7753d4ad1ab0a2d471a"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "261b08ef602b9dbc40a336686946cf74"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "92f44a6bcacecae8de1dd55cbff53f49"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "7c81f5493b93a476a6dd257ac73c162d"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "ff175b6a58faa836c8001c172faaa9fd"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "6750ccadef20a13048b64871a818546a"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "de172db180fff614f946c4deaff1a48c"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "9f87f025ddde1e8cfd8ef1d19c300ed9"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "97a8e8a963cb03e7156981fea84f046e"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "9046c5319437af64dd22d19d73afa2f1"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "33e8150f2af032c5c42f22610e354e59"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "4b7b96c6498f40252bdb3286034ff935"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "496460139b5d41c6af4077587a630f90"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "02a9a666f39daa0bb4f8aa7bec1f7477"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "d78a341a806c62f6381ad9b20959b2e5"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "25cfd2eb2ee8b20282f6b3c2be4ad322"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "aa0e84f2f6925676fd1586e8d4d38d92"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "9a73fcfd0d86fec9d12609ef4eb01572"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "72bb299a7c1c754a8b7b9ca06d1413b0"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "ece87165634fc5826bd51b291d4b6cb3"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "c1fab634caf88fc952e7b70ad9ab1be6"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "b207612fee89d3351a8d9b1ad477c65d"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "57f4364908c3e8c8d5db1d3f91201314"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "17835d91811e4360279a8398bf8f06f9"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "f6f4e965fb57b6b1f92031797976f796"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "9e21454d03f28d0b2e9306e173151153"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "af5b7eb90d6bcc12ce1bd12b2f6e6375"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "5f06ac5fbc3bace00d116cbe4510f70e"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "f507919565d227d1a9aac4cb075506ad"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "c5d2167c29e7067f86f977e71ab0b314"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "86010f6779210f38a48c7ccab739392c"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "9954cbc13f1f3a1add03166718275e10"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "0954eccac87a8ea0400a71431e8544cd"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "3db8dd36031a92153a88ee2ed5df9dbb"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "f01d1604a440f369bce680194461fe49"
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
