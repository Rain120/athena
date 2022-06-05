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
    "revision": "77bd073c7b552b7f00b146835f301070"
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
    "url": "assets/js/105.200b298e.js",
    "revision": "87da34d0177d456f256ea1351d558530"
  },
  {
    "url": "assets/js/106.3d869a48.js",
    "revision": "b5ea17bc9c346ea1c258afca2bebd4f1"
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
    "url": "assets/js/78.d95766ab.js",
    "revision": "bf98af3822a5a6d594294c6e46526817"
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
    "url": "assets/js/app.b4381640.js",
    "revision": "09b709fdede741c11eddbc15e3339e1e"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "551140a3f3ddb4a1d1c4636ccac68dd7"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "e20a79347f8a4ccd4f85b7a702ed0773"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "2cc685d01a0947fee1a9de928a077c2c"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "4262a68a28652c83f620c570ef454351"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "d83c9719cd22640efe419714552ba0df"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "5da507cb33e8589bf59e4b3142a4ecec"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "c4da0768b8b6a767bf01e67ca25b3a7a"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "f9e5a1186a2815e91937908ee1056566"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "d1c555bf99ba75e698b9304eed44c9d9"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "7790a029a667de090413688f500afd59"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "6a9d3bedb7610d75155d29cd6d0d551d"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "283af3eae1fbf375319de0cfe70ab659"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "290bed51bdf24b7d25db6620beafa32e"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "2e148d7f7d70fa4284366fd9b5444854"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "203f9ce2fe7ccb0f03464659a65af998"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "a5ab5429e4fc263506fb1683bd5143e9"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "d2f91f0774ff689f38523bcf246bb410"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "65ead8f82b1d873f8e34ba553826d059"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "ad0a933e66c979551e2622b7f39fe562"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "272f42d02b3650b69f938881b93b0374"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "00520df14555c2416a2ae40aa1a57b12"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "7711b62c1465ac5c94b14f5f8dee3dbb"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "4df566983169be308ce8fa103e6044a1"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "15fbc724b35755630656cb5e951eafec"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "afad2e02e8c34cf2bf1dc31cb7dcd1d8"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "f32f78ce9dffd51df321bc8c36216fa4"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "9d8ace2c58180651db17a2124a3797a8"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "ecab5321de65df2ee96391327b789600"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "3c942620b5d8882589b8072a60fc32ae"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "f73657ec1a861c0b9ef3479442825eb9"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "02f4e5a1aa2a1f2776b49ee49fa58c9d"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "576c2afda992815347f3f6b4db925f55"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "4e33d3d219379de1593788d81234dcd3"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "a9e4d188088205030418eb236a56eec5"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "6545690aa00548fba285d26eb412dc49"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "088860cab2de8520af968f2d1d24c5f8"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "8672ee457545bfa6875eaaed358f60b6"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "0a5f5bfdd0a083d39c8dd1fe7b28f1f6"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "7bde9d6a582d1557e1478ed9c353c480"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "605d1284ca174064774a185578419e4e"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "de5e815df81b63167e2841917135cddf"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "c5dc1a48a011058c6104e65107da0772"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "346374b285de7c4af8565a720f72fd75"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "31092c2a79bb8a463d341eebf2a15557"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "764d4037a8681652240a410c3dcee25f"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "3d77589a99ffe30934973401d736b6a3"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "87fd8142b366954cfa44b75aab119e2f"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "50069fba862dca48a2d2e0b852480021"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "3c23b05d67619e058e997bc3f3e39145"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "0b0f6976ac0a58f3f3356f689906c6fd"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "95612937d1ee1adc2297c3086f945631"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "6c201bb85ce320a1b4ae3f40bef20315"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "c8485e06490cca95471189569ccc364d"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "f1451d88b492439547aa8f4a6c5e20be"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "288e632ef53d37b9a366f0c694037a31"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "1b0e92fc376f8c44db2f4014ae4d3bb2"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "5e20379363e151b3d3de36280f7f4c64"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "2eadc0d54af876db47be63b4e4bfb0ad"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "ba4d9fabb4e35e0e9628b6e3a7ac4059"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "a64ffbcc8bb7d9ed3195005b0fcef716"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "3bee0d0d2b405a0168d13053692decf9"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "82e6c4223d4d5d4210dd90273f7c2464"
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
    "revision": "6094f10adde4857e1e88e42b190d5b39"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5b18cb720776c403c0db4690b8f5bdb9"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "2563e6bad6bd4f7f926e5a506c2f8306"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "9b112fe3d62905aeeb7fccc8c1dd0b38"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "2c0ab49812693521e63eddab964cebc7"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "28111f52a982f35348b0b2c279c76c16"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "5eba6342097f686105810088aa6d5221"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "79398f198c20a1923f55056696b58008"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "080a473858ca62c91f37959b78839a0d"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "1661ee8a47afaf0ab22c8efc711a5005"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "277f5554a0d675c51f604d3845227c38"
  },
  {
    "url": "zh/slate/concepts/04-transforms.html",
    "revision": "b255524f8d71fd6b66195ddeb04c7907"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "2c9ebeae1bcd3dd7853f4fe1fb2ea414"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "d450b13c52132803936c577528cdf08b"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "67ceed3f0d540d511b7d83e08cc64481"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "dd89508429148c9029ff557cceca17da"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "ea0b8972cda76fa1b2dee88ecc99c897"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "876d180cd3a74c7f44989553db13a16f"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "30823e112f4d93b8fbba73ca8853a7d1"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "6e4710d3b57a94eb9d5c245285386f6b"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "f7bd497ab3d57f173f9583c2b9d44cec"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "8edbe6b4ee34e2bb484b8ab841f59918"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "fa0923a443f63d9d9fc1f73072ccb7be"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "3acdadf59d6cb240b88395eefc259926"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "7ecd5d9a14451ab74e4090475b5cf865"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "067efff85c0b4dc5c2084ed9e9e35201"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "81e75679d504f1936ab8546862be9864"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "624218d28b9cabfda5f273baf72b9b8a"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "9ec7cf50844a53d9b506b4b6484ee2bd"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "4f774b928cb50c04abb4f6c2ffea88c7"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "2c50f9e71a0d8b11467767d1bdd2c285"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "53f90f82bc188ef689422b8a207e250e"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "cba1af221ee2be0b17544c9612d05fc2"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "2e4cc31993ea42b47acbb7e94cc42943"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "b48fa9fb2c1fca6cfa7f7e92833783cd"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "a023f1c9d537a94e865a6a1ba1f0106f"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "a3cefbad5bfd3288afd5a1634467de56"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "edb435e6c3f8b51e62b74f106cf7f1ad"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "d7147db72ece42e8d44056284f30b0c6"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "c557210ef18ef259f1d169237725fdf4"
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
