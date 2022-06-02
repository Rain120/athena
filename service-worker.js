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
    "revision": "d0ad220c7c65eee613f1fd40908dad31"
  },
  {
    "url": "assets/css/0.styles.bbab9b24.css",
    "revision": "0e2917faa5d2763ec84d613faa0f04dd"
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
    "url": "assets/js/10.a876ee9c.js",
    "revision": "a699f5cf9b6ace2e278f57a842f2ec7e"
  },
  {
    "url": "assets/js/100.b03e42a4.js",
    "revision": "93ebe4dc1c15dce025d438d04e5dfe86"
  },
  {
    "url": "assets/js/101.6ed55db8.js",
    "revision": "d9c54043abbe1532bd90912643a19e59"
  },
  {
    "url": "assets/js/102.2d4dc277.js",
    "revision": "fb4770faafdb58cb53b37e33c5e6fe83"
  },
  {
    "url": "assets/js/103.8611a2c7.js",
    "revision": "9d4f7df187d4d3588d3a975a3c2656c0"
  },
  {
    "url": "assets/js/104.f75c671e.js",
    "revision": "ee4ea67e49d58d09d95c5badf312b7bc"
  },
  {
    "url": "assets/js/105.07525836.js",
    "revision": "1e384cff3076343026ce65350b90dcb5"
  },
  {
    "url": "assets/js/106.ff832795.js",
    "revision": "0509a388177a4127b6b0abc63000036b"
  },
  {
    "url": "assets/js/107.61bacded.js",
    "revision": "7857561eaee44a25d44fa5f5f179f0c4"
  },
  {
    "url": "assets/js/108.a740891a.js",
    "revision": "39da15ff49921f10d883f6c2ef64fcbc"
  },
  {
    "url": "assets/js/109.975e701a.js",
    "revision": "7f0181d33824c8642872cdeae05a510f"
  },
  {
    "url": "assets/js/11.478ff2f2.js",
    "revision": "4bd58a4f37f8badaee6f651655519839"
  },
  {
    "url": "assets/js/110.5e335986.js",
    "revision": "f427d24e8b930c1df060791d4458283f"
  },
  {
    "url": "assets/js/111.fd59621b.js",
    "revision": "c8f26950b58d649ac7e57f17e52e94f1"
  },
  {
    "url": "assets/js/12.b026dda4.js",
    "revision": "e32980e33e6bbea4186b1de1b33ca657"
  },
  {
    "url": "assets/js/13.abdf550f.js",
    "revision": "2db616854c81979f0328a08a198b9b25"
  },
  {
    "url": "assets/js/14.4af0dc56.js",
    "revision": "87e01de1d7bd7ceef2c138f80bbfc4a7"
  },
  {
    "url": "assets/js/15.b09c5e16.js",
    "revision": "f84a51dfa39d3e578480abdd69509fb1"
  },
  {
    "url": "assets/js/16.699f57b5.js",
    "revision": "0802fd2b7cfbe032c438998ea6a26c5d"
  },
  {
    "url": "assets/js/17.5b400c5d.js",
    "revision": "67c4bf5f28e9c81aba9619577b96d1bc"
  },
  {
    "url": "assets/js/18.41fbc717.js",
    "revision": "b22c25917295d4c16885b250e03345e0"
  },
  {
    "url": "assets/js/19.45fa608a.js",
    "revision": "db6fe4c882c47071926fdba4e738b054"
  },
  {
    "url": "assets/js/2.619f27ad.js",
    "revision": "3e5f6a15f0c87e866508a717bedcfb4f"
  },
  {
    "url": "assets/js/20.df3b2d97.js",
    "revision": "94cbd0c52f5375c51ccc345cb3112d00"
  },
  {
    "url": "assets/js/21.53064bac.js",
    "revision": "2f758449f716a9dbbe0db6b294fd85ff"
  },
  {
    "url": "assets/js/22.4b6cfe1d.js",
    "revision": "56300b81e9ae997679e0da3055cba3a7"
  },
  {
    "url": "assets/js/23.b03ec16d.js",
    "revision": "18f8bc4306f7f8565161bd210e68a221"
  },
  {
    "url": "assets/js/24.7d70f649.js",
    "revision": "1ab6c2642334a7074629b0a5a423c554"
  },
  {
    "url": "assets/js/25.f57333cc.js",
    "revision": "3386b2dc62d40d097f0ff50bf75451e3"
  },
  {
    "url": "assets/js/26.c862bc96.js",
    "revision": "10edf9b4a3e8c5b41e78a7b490b72c0d"
  },
  {
    "url": "assets/js/27.72ec43dd.js",
    "revision": "15e4acb8be993c542d99e3c9f2670a1d"
  },
  {
    "url": "assets/js/28.d5b5dad7.js",
    "revision": "a3925f8aa382f8c4e81706e3bf799b8a"
  },
  {
    "url": "assets/js/29.5ca1e878.js",
    "revision": "b8dfdf64091382d5a6c6766c9430eb9a"
  },
  {
    "url": "assets/js/3.bf6870b2.js",
    "revision": "fd34cd4e124cecede983f0e5ecdf592b"
  },
  {
    "url": "assets/js/30.bf622b00.js",
    "revision": "584b048be4fe1e63ed9407b9fd3e9dd0"
  },
  {
    "url": "assets/js/31.58ecdb7d.js",
    "revision": "56719de8fa3ee50e3ca60e0cb4f02c04"
  },
  {
    "url": "assets/js/32.fc3afd78.js",
    "revision": "df03c11b7188ce85e1a0e08783daa18a"
  },
  {
    "url": "assets/js/33.9ec22b5c.js",
    "revision": "d337e7e27c7cd39b7d15b1794d42c152"
  },
  {
    "url": "assets/js/34.d6fac2ae.js",
    "revision": "00521435ab0825ffbe3d81d86f722e41"
  },
  {
    "url": "assets/js/35.fec638b5.js",
    "revision": "25ed32dcf7d5550189f3ca9972135729"
  },
  {
    "url": "assets/js/36.6bcf2443.js",
    "revision": "cf3fda580a7207249df0829ca2902d57"
  },
  {
    "url": "assets/js/37.34b0cd16.js",
    "revision": "7b5a9c7de928938511b5e43c24241387"
  },
  {
    "url": "assets/js/38.01855104.js",
    "revision": "d629233ac558b60d0d90150db262ae0a"
  },
  {
    "url": "assets/js/39.690e6d9a.js",
    "revision": "1268714d5d071b5f9cc452442d7df2d6"
  },
  {
    "url": "assets/js/4.0b186f30.js",
    "revision": "4377f63cbed7764ed28cc4fe44556f56"
  },
  {
    "url": "assets/js/40.5d437877.js",
    "revision": "51d3cdbe3a56f9906dc6850a38772698"
  },
  {
    "url": "assets/js/41.3e0ad625.js",
    "revision": "102fe4c52f85bb0cab8022805ba083e8"
  },
  {
    "url": "assets/js/42.45bf2c0d.js",
    "revision": "38a2311e3e442d964c4a83a7a3363251"
  },
  {
    "url": "assets/js/43.07c9d84a.js",
    "revision": "d9233bc89e7b0aeb9126b8dfc47f3ae2"
  },
  {
    "url": "assets/js/44.7c334694.js",
    "revision": "168be37932a3b807ca30d9259ef78942"
  },
  {
    "url": "assets/js/45.ba9ec024.js",
    "revision": "cd5104c004d3f17ca83741498100af47"
  },
  {
    "url": "assets/js/46.7cb00a32.js",
    "revision": "5705238e4b4ec3e7d45de5a257999ba6"
  },
  {
    "url": "assets/js/47.bcaf6677.js",
    "revision": "4b0bd7fc8b0702aa83e0a4aef831035d"
  },
  {
    "url": "assets/js/48.3b1d6a2a.js",
    "revision": "01c5cbe6fba8d8303aecedd9f6677f24"
  },
  {
    "url": "assets/js/49.454d9027.js",
    "revision": "c31e0daddcd08b0fb22e14e77f219882"
  },
  {
    "url": "assets/js/5.7204e42b.js",
    "revision": "ce8d33857d430ce07148d54c702feeef"
  },
  {
    "url": "assets/js/50.c5fd5aec.js",
    "revision": "227a6844577d854415f8d45a5752f911"
  },
  {
    "url": "assets/js/51.56bdca1c.js",
    "revision": "fac6304ec067650d34b79becbbdfa2ed"
  },
  {
    "url": "assets/js/52.f40c7a1a.js",
    "revision": "a1d4ec2baad9e58296ed9e2f37ac872c"
  },
  {
    "url": "assets/js/53.e1a2b886.js",
    "revision": "423d528071b8434ba28abbdeea8d2581"
  },
  {
    "url": "assets/js/54.45465f8d.js",
    "revision": "fdd27a1542b886f54da4e3eaa25d63d4"
  },
  {
    "url": "assets/js/55.7987a6b0.js",
    "revision": "90f00e63320fc8c6efc394210d8221e4"
  },
  {
    "url": "assets/js/56.159eadf1.js",
    "revision": "b7c9d06cc9adff3e1707dc289fa1d1ec"
  },
  {
    "url": "assets/js/57.da6d9f35.js",
    "revision": "8065bb2f3fd8f3e0660a3decfd3c32ee"
  },
  {
    "url": "assets/js/58.a25864cd.js",
    "revision": "995fb839ff0e49a98e4a46793e69f029"
  },
  {
    "url": "assets/js/59.11fa0b8e.js",
    "revision": "45da984af0710c86590dc9dc16b924f8"
  },
  {
    "url": "assets/js/6.94cfcd77.js",
    "revision": "43390b01d74babdc04d35e315e8dfe39"
  },
  {
    "url": "assets/js/60.12d7ac1c.js",
    "revision": "d36b4b9b6cbe1af7245af95b32f97ed3"
  },
  {
    "url": "assets/js/61.42c8db44.js",
    "revision": "bd453b9ffb4d260b7114a5ee41d66807"
  },
  {
    "url": "assets/js/62.9da8a3cf.js",
    "revision": "71293c2a76779c294c4fc8442e968dce"
  },
  {
    "url": "assets/js/63.73c64880.js",
    "revision": "4b3be7147d11cdda9dcae670365f5786"
  },
  {
    "url": "assets/js/64.5f13c7c5.js",
    "revision": "43e39907f66514cf265fe96bb27e4d8b"
  },
  {
    "url": "assets/js/65.1d7c4117.js",
    "revision": "750b7c280788441f39bf337c08042b4a"
  },
  {
    "url": "assets/js/66.508d6de8.js",
    "revision": "2c6e9df7570836453676098560777a48"
  },
  {
    "url": "assets/js/67.b99a46d9.js",
    "revision": "4b16b060375b831b6bcd0ef5ef4d6ec1"
  },
  {
    "url": "assets/js/68.e6630c75.js",
    "revision": "63fe9022b2e7cd20c1d7a6f038009b5c"
  },
  {
    "url": "assets/js/69.6090a90a.js",
    "revision": "a038a7645a89950bb976ca8e5fb36350"
  },
  {
    "url": "assets/js/7.5dc8ff33.js",
    "revision": "10d6352fea02f2993ee62e0a3649c673"
  },
  {
    "url": "assets/js/70.e08d5ec4.js",
    "revision": "f01dffe80b67ddadff5dc6cb543248d1"
  },
  {
    "url": "assets/js/71.6f94056a.js",
    "revision": "b1c8830ac491619fc2834d993a615e00"
  },
  {
    "url": "assets/js/72.346a7375.js",
    "revision": "3e6708bf30e2fee6ff0041a424224033"
  },
  {
    "url": "assets/js/73.d31e7125.js",
    "revision": "7f7926bd65dda04dd0bade34ebbd1464"
  },
  {
    "url": "assets/js/74.2eead60e.js",
    "revision": "21f4a54966a57fe25456ddc5ad3fae04"
  },
  {
    "url": "assets/js/75.844cc6f5.js",
    "revision": "1b248a4f7239680bad1503a026fbb0fb"
  },
  {
    "url": "assets/js/76.f2433e32.js",
    "revision": "25eb7fcb94106de10b2b1345da3f143c"
  },
  {
    "url": "assets/js/77.cdef3dd3.js",
    "revision": "92571cd95f30ea5d164e669a6f5af185"
  },
  {
    "url": "assets/js/78.19ef62c3.js",
    "revision": "6679650661bf638941b8c6b6be60413b"
  },
  {
    "url": "assets/js/79.56b7d0ef.js",
    "revision": "a6c5c44b4aff61b2bd33ebf6bf42167e"
  },
  {
    "url": "assets/js/8.7766c748.js",
    "revision": "dfc24d5cb902cc1fcf35bb1488091ab0"
  },
  {
    "url": "assets/js/80.03878179.js",
    "revision": "5bb70f9f18eacfde3649d95b7755546c"
  },
  {
    "url": "assets/js/81.f9e4d184.js",
    "revision": "11361244129fd9c60488f032ed88fc4d"
  },
  {
    "url": "assets/js/82.5fc794a2.js",
    "revision": "07f48e0d2867615af2c5565604e295b2"
  },
  {
    "url": "assets/js/83.ebafdd6c.js",
    "revision": "905371f72b8b5342e4ff8096dbb71ef5"
  },
  {
    "url": "assets/js/84.eb379ca5.js",
    "revision": "736cd7f4499ffcfabd48c6ba2d69fa6c"
  },
  {
    "url": "assets/js/85.b0af861c.js",
    "revision": "63c97d03e330b0baa87e473ebec90315"
  },
  {
    "url": "assets/js/86.d545bc69.js",
    "revision": "0fb2f47ba5fd5aa68844de3e7786e30e"
  },
  {
    "url": "assets/js/87.cc23a40c.js",
    "revision": "96bf7853f58030d3dec1c1344f3d3d39"
  },
  {
    "url": "assets/js/88.845c5ccb.js",
    "revision": "b04eb3d581f99cdd85b3e4785b473116"
  },
  {
    "url": "assets/js/89.c311310c.js",
    "revision": "9c96a3da53305b435b09b1ba463ec3df"
  },
  {
    "url": "assets/js/9.b7e54a8e.js",
    "revision": "9fad32a79e394b4e1272b0ef013d4423"
  },
  {
    "url": "assets/js/90.e477eb85.js",
    "revision": "c6a535b56dad4ec07414fb6580d5376a"
  },
  {
    "url": "assets/js/91.0f77d6c3.js",
    "revision": "fa5d23ee3455df400e4d90b8f72a5100"
  },
  {
    "url": "assets/js/92.71b5d3ca.js",
    "revision": "69ec7146770bb3fc0ae45aaf2f644cb1"
  },
  {
    "url": "assets/js/93.0380857e.js",
    "revision": "c0b9f9874f871f0fd5f87e653c47f093"
  },
  {
    "url": "assets/js/94.9fa093fa.js",
    "revision": "db4d04fb87c40ae57f404a5bd73d348e"
  },
  {
    "url": "assets/js/95.15186ddb.js",
    "revision": "c10c843eca0ca23108f56a30b04dbb8b"
  },
  {
    "url": "assets/js/96.e446ebc6.js",
    "revision": "3d34c2a8ef4432096e38ca396e3b99b8"
  },
  {
    "url": "assets/js/97.4c7d3a67.js",
    "revision": "41f954c94a538c74d86da15608074a36"
  },
  {
    "url": "assets/js/98.b547e250.js",
    "revision": "057a4dcb1f486561f5d3242ecc1a2c87"
  },
  {
    "url": "assets/js/99.a1c23c93.js",
    "revision": "b298c226999329368dc9f0fa85667b28"
  },
  {
    "url": "assets/js/app.1a51e4ca.js",
    "revision": "49dce8d26ba0e33a9210b58063c5f650"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "ebab1bbff1b6d091d19af0595935b2f1"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "2d8af2795cd0fca27f4f497c1497fcbb"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "4a7a2221bbd2c73024c313704d173537"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "5680f17db9e4045533c373701a0cf5d9"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "66c61372517c9cacede87c118f04a97c"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "a81c383f9a1f65dbad242819f2ea6d24"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "eda22177bc24aa1227425ba5265f7679"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "264d424345cebe7ca2e8e293c2d97aef"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "6f6f005c0d0a8e40308a083a53e8fa2c"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "7d32cddf169208f2ffc6b8337de37546"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "b99cc1ea6829de9616ef38fa68ecba19"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "64fe3d3bfdfb06dc7ffd74df7157f7b1"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "0e44ff03460789f758aec5cd850701b1"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "8f226fee0f2098a7739540baa205c011"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "d5cba6f6d0a1f4dbfd638d91fbbb5675"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "1e492e1e3be54bb8249929e4844501b8"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "08cc19ee986ad67fca9d1b56c912c045"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "77b083db0de9ada08390b791f61353f3"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "0c68ff3361ba2ada73e11fc74697d22d"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "301ebe2c06172146ad68bd8f7ad6f81a"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "e79da1dc8a7b8929f92a54b8a8cbdda4"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "2d129a3093c30a3b51ada2f841dc5b07"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "76d8f1525cf9e83251efc76db3814325"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "1363698a90a6222d62064a4d21ced290"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "1953cda7da2987e2bbe596ad8e18e96a"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "1035aa07b91a9a85f83daea3baf3ddf1"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "6034ff54e00e948ff35a8d1210e81d2b"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "81ef65ecc2b5afe6daa0d61fe3d0ebbf"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "a2ac1e66e1af8b46ab84a40b5d0be40c"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "e3de6d396cf0aba7817f27deb0ce9a38"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "25fa213ab42e1a9ee773e8377f92e203"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "6892dca5efdbfd4681a132864837047d"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "0fceb4f5075258eea6267c763a244040"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "5b7dfeb7f294209b152c74a728bd8133"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "5880cfdd5272502f2481643540e6fef5"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "28c5f830aee3ad50951d549cb4b467a5"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "f428ba896d7ab2c693eb12b54dd8bda0"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "b9406b6fd7758d4f9e97885dfd8ced59"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "5a63fb1eaaf0c72afdad6248bf21be0b"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "ed92531472a4d774e78a0a2aa9b53929"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "755986a99e1075fab6a36da0ef7e7725"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "b717e898694a71468090e57402a146d2"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "13514f31278e8df2c09d4d68f7a7dd08"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "bfca04d89b38e0c9ceff56f36702dc3a"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "1059920e3254e56ff0a2ab891ea65459"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "b9cb341060778d4a831a99e8e0a5f9b9"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "1cac0862430ac35355bbd4266f9611bb"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "366eaace5fa9d8737832fd06d4714334"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "b18c89a254c55673f021369ba2f44d99"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "ec4e0b18816bb225740779ed2d074698"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "c309320e3bc3a9f8f300e3446b3aa200"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "b77de645844705ef5c04a5d203145b60"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "e88a38cff472f9e0e8ac4f5976887fba"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "cdcb673e54f9aac559caa518bc3f335f"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "d2caec5554db5e1b2ffb0d059e542120"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "7a59af2c5982f6abd1e84990f78eb8dd"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "150dbabeda74ea6851d034c316c5ad58"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "6e4fd666c4b03e53cfbe5edda973b6e8"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "b08598bdb1f1703f651f3b491063584b"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "c5539a6a18cd7a198c9c8f74f1a569e4"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "e889876b115f48d75d4fc81cf44b87ae"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "5f731afe945569d69c5fd28eeae6bb00"
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
    "revision": "6ab91370f9269351baf1c4f874443416"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1f09207165bafa94cbc28d8000fbd02b"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "0392071949f8e1dfeab100134b67d0b1"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "acd21c272271d468d061d0a3505ffabc"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "a248d659cb85f022884cea670b104086"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "6659e646af32e93c7f5fc6d1414070fc"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "20a2fde64cbcb0fb1f29ddf31103b1e1"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "4368b2f354c0a96e94550ae3afd6cbea"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "2bd41e1b5965094d60f0a095ef7ba1e0"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "5b6fe3dcfa903b92b3c4d894c2d7e220"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "60e037f7f89346e214ba69cfdf074ed7"
  },
  {
    "url": "zh/slate/concepts/04-transforms.html",
    "revision": "f0db1c323c369f7d0a786b0bcbabefd7"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "816e0db289d4d6c032e741c9b6b0dcf1"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "f76ee86d390f1af9bda758a829ada163"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "42c7c9caed1bbb3bd958159f83c8092b"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "61b7a1a00debc0fd8494c57e120ad019"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "0f75337d48e8b13d734b2c7252227e49"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "3e11a4dfac21bd8a89b54d2b6924e659"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "788acb4382c7a4b708730be0577e75bd"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "a9e471a2402d65c2ea1689781b22cbcc"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "e82060cdf01ffc61b7e5eec7620fead7"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "d0bad7544334695ebe5e3ae800069c5c"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "2a2fb30e92849b2d3837aea4b60317ba"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "fae5619cc5aed88f255fb33463ccddc7"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "b3e0750b0f3306ff5c0b248737a7cb4b"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "fb7f83a620cea3f07e6312b9e272012c"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "b0ec060ab2903e7d4a7714defc984439"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "2b497e937482d981d6f39c67195fcff9"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "843afa302c6948f23969d55975987981"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "b5fa2247c7c4451ca7284d8a53b236e0"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "21ab36bbb5204e4dc613d39a57122113"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "8dc6a81d6b5d98486d950d257b4f84f1"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "72c84846f8cb1a42f5afd50e55853512"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "25299e4e5607c060b08858b0f277b82d"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "cb65b85660010ae06911a0596eb82a72"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "dbc419614b7c2683fa29fd41d4e22586"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "c877471210acd56f639f5089b37dae97"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "be2713d4ce84f0487e8ab29e13eba206"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "a98a657250a2dd4d8881a7cf97251eb1"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "1080caeb34bf2818dbfad2d4593d09c0"
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
