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
    "revision": "1cd143b7c08d4b304fcafb86510aba1b"
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
    "url": "assets/js/100.5034e1fd.js",
    "revision": "1dfd92c41ef9fe0d96fd4f251d901776"
  },
  {
    "url": "assets/js/101.739b1d99.js",
    "revision": "5aab0da08e40f0e7853580092dbe48b0"
  },
  {
    "url": "assets/js/102.850c6827.js",
    "revision": "f17e8850016edec6b813456b3021dca8"
  },
  {
    "url": "assets/js/103.344b513c.js",
    "revision": "c8f1b077fbdb21d4bc903a6be970432f"
  },
  {
    "url": "assets/js/104.c2244f73.js",
    "revision": "ee82c7c9e8436181ae7cc173ca8a45e4"
  },
  {
    "url": "assets/js/105.d6505535.js",
    "revision": "4bb762786b2e33ab41454040cdca2024"
  },
  {
    "url": "assets/js/106.fcd7668b.js",
    "revision": "afe9f60da063a267244dde87fe9c433e"
  },
  {
    "url": "assets/js/107.809bf6a7.js",
    "revision": "bf4906569868131b82be40f0e4a3cddb"
  },
  {
    "url": "assets/js/108.9af228bf.js",
    "revision": "6949b51cd09d780f1d662cbd20153d02"
  },
  {
    "url": "assets/js/109.780f6f50.js",
    "revision": "f43a0ee178dbc7217402d41fa7df5e88"
  },
  {
    "url": "assets/js/11.1a83263b.js",
    "revision": "1690e7008cb99ef6462e0f1cf2128cc7"
  },
  {
    "url": "assets/js/110.b243b8b7.js",
    "revision": "2cf9137b7d8db763db4b6e15e5b3c71f"
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
    "url": "assets/js/14.88a209ec.js",
    "revision": "81e00fab8dcd86b28cc9be7882da136b"
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
    "url": "assets/js/4.7ed90dbd.js",
    "revision": "2ebd3cd010eaeb4e2087b33381819a01"
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
    "url": "assets/js/6.d0fd1b67.js",
    "revision": "8fdfee5d9fd06f5dcae1c252e693f413"
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
    "url": "assets/js/69.16b562f2.js",
    "revision": "7793273e6cb0da9d60e321f2eed175ae"
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
    "url": "assets/js/76.f370c9e9.js",
    "revision": "4eef1e528a08710ef6801cac3f1e2c43"
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
    "url": "assets/js/88.234891c1.js",
    "revision": "acb072db62d4cc8fe3db1fe1f19cd832"
  },
  {
    "url": "assets/js/89.55d3e1fd.js",
    "revision": "97eeb056f389104912a7dcac027f4abb"
  },
  {
    "url": "assets/js/9.b7e54a8e.js",
    "revision": "9fad32a79e394b4e1272b0ef013d4423"
  },
  {
    "url": "assets/js/90.c1b5560f.js",
    "revision": "f181ffe2694543e76b7d1461b3efcde8"
  },
  {
    "url": "assets/js/91.02b6715e.js",
    "revision": "5ff07d197f7f2cadeb1f7225888488ef"
  },
  {
    "url": "assets/js/92.4c76c562.js",
    "revision": "45337258f7bb5d5acfed39987d564f92"
  },
  {
    "url": "assets/js/93.b67e23e7.js",
    "revision": "f30b192491c5ee31e2636ac2c34a0bf4"
  },
  {
    "url": "assets/js/94.c600fa7f.js",
    "revision": "34822220845ddd58cf7f5ac71a0a028a"
  },
  {
    "url": "assets/js/95.3554f175.js",
    "revision": "745a36739af753c31efcbb83cbba19ea"
  },
  {
    "url": "assets/js/96.f071f558.js",
    "revision": "cf0b4562af731573056f73e53589d666"
  },
  {
    "url": "assets/js/97.72cd5d0e.js",
    "revision": "9cc08d16ff6ea7f7d3e5b76470f99010"
  },
  {
    "url": "assets/js/98.a0b76fac.js",
    "revision": "933f68bf8fa90840a9ee71d9ebd8db8a"
  },
  {
    "url": "assets/js/99.bf383b90.js",
    "revision": "1f006bd61cd616fccef06f73f5a2baa4"
  },
  {
    "url": "assets/js/app.825aa35a.js",
    "revision": "1d520d01ea0a2f6a81c65cb8660a07fc"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "e5017435b403bf3cd32cdb16ad7164a8"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "1ea25dfc34fa7c265204389163b6783b"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "5dc5652c42e5769531c8c1ec1ad17fe6"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "e45bab37c0ab747d9359a479d15a48e9"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "214cd2e64b40be222b6862a4ddba949c"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "fbc28824d70da94b157f918c9bca408d"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "2a3daf9aa8f84f5e10b41485871fc46d"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "f82e83e4904bd1001d71670b68e6ed6c"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "f94416f139ef563b7760ae06b1a04358"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "e05914883e8f2c4f9aaa936e673601eb"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "d0b21b6d381d77050b0c2c2bf221de66"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "6d41cd153fd96255dd0be2d6a5a2ceb0"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "842e5a0cf657acbfa78f66c8b897c806"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "d9775b9f8368daedd34ecbabc0d2a51a"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "fb0ef726fc318cdccb510825f3ee8466"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "06d8b8ab27828be45840c4c463617002"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "92be47fe34e31a3beda387ed49480ab5"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "4de18cfb873cb8528c87bbdddba56aaf"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "aa15b2b4867fa7d3e42798ffc92347f4"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "7f0f93b42aa98bb04ab5cac0eea942f9"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "e9c43e84d5eeb37d9d104f0cd5f54ad6"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "741c6f0b5a0281a2ff8645867e031a3d"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "defc130a8ae0293ed7c9ec3e38b3faab"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "8fafdf46c9e85876879b809938ec6f44"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "613893e6c8c0036bef8ad08214b8b6da"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "79c227f44174243c24cb9c78f68bd8b6"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "f8b1fe96766689a71b97f78e8c6027c2"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "0e25c42fc3d6886c221b1f21b1332764"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "327ab33f922d238f6f95cef96ff1f8c2"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "09af629fdd50c1fc59fe20706d2637a4"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "6404a2baf7cb0587794fd182b8b61b04"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "35aa567186c5e8a1e85d4ad98069c24a"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "953301f3d4d593cb4e302682f3639c4e"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "3718a46347a6d8f18dadc9c54b93a71a"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "b668501ec9c3d7ead4a8cff1f15a0d18"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "53eafaef8ef06feb189a1a4a7a915e64"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "d99db741ebf44880a54e2650bfaad6d5"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "0f366b287c6bcd83294dba23e924a2ea"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "7d5afbb48f553519923cb13346ba03ef"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "f4be0fca7fdf8f0b58fd3dcbeb2bd830"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "e49d592aafd6497e3542f9258a8c849a"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "37c5128c6e0111ab0ae256c774c7f80d"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "587ba6c5a0c2be299dd133c6d69f8485"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "6ebcbdeb1dccb991ad1c07ec5d503fbb"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "e5e28afea061216691e0d70ef96c4b46"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "1b77743044da1df46d699ff07b70e9d6"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "481d41a6f326e20858c9184b828ebf20"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "7b5c89b1fc8f423e67d18ffdf25eedf1"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "7018790a04edfffcfc1376efea61aa43"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "2d46fc3ea71340b9fc02e42589eadf15"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "65f6f5f425003237e08b8d8e16338707"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "bb18690e9b0d36ec38d48abb6b2c4f03"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "fb65a5259a9bc2c2f881511135b5584b"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "3f205fc3f81f4f5ff735faa083cf3f3d"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "d023cd617093d3f606e41b5a3fac6575"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "e2ed92820a0e3f33214a66159da67d63"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "7454a7f8f2aaee827203c020d5f1f0af"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "e2726f205f2acee1439e63a07fc942cb"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "b57f70ae6e0c0f4ea419bb604d1cd575"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "edbf5e80d9f821c9cb9dc25de9142903"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "bf48ce5a449586a2401ee56d7220c2e6"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "2172abdabbc99c196a0fb79f03f38b66"
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
    "revision": "8c57ec93847a796247959b18807b6e09"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "103c8976dc30f3405be3b697bdd1e487"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "49d0ba20a33bcb6cb85c959410313c66"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "a97647eb27654a40f573d7f95b71bc56"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "5fecd1c471850d335f8a7af9681f65bf"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "3615f975f0740e023cdb1f4c0c7e72c5"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "3035756e81434421ae1cf440ad63ffa1"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "3613a051a71dfb3276dc0aea294b95e7"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "f9e0012a78d47eae089217be1693aa11"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "674d78315b72802ff6c3ee1c3203c9e4"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "7df991fddba83011122c692255ba7695"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "4fb9efdd753d3dfc18d595aa8adfd4d2"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "b9244fe0aed4b7307e9d56471704e8ee"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "ceb7a85a7ba90e6ee79c457021e58396"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "119aaaf65751313efdeba0561057d2dc"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "0fb109aad2a17e89915ff877fb83b48b"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "614ee420de96c55ee84fe94cc767927e"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "6b69004e61b9063046c112f2178edf16"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "50e4a2bda3b860a7873374bb17f388d0"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "c4fc170d5ed957ada7b181531bb2ad25"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "058af6800dd9f77be8a87586fb193fab"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "92bbf1eb35c1f0471c0db2a922f5108a"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "2529d8e4d8cdafd04a58bce10d182ef7"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "3038e6e2a84c9344ae61e98e29d65d68"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "da1bef91a860291d55a1f988f31ea404"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "9e1956d6a52eac453aacdfaf0ac10da4"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "a0792d277c5cf00fb671efb3c1830a37"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "1cb844c0299c38a1d90a59a1193f552d"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "3389da7026d40808ac53976d9ee2845c"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "c5362291ef24978106e94a8c8f95ad13"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "bd13a870a642bfd0701d09d2adac7fe9"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "2b205b7a32d8d95d6e7f43ba75ba47fd"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "37d52fb9f082ca0057e5cbf0df973d77"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "2a754ccdac304fffd9c6175c2390204d"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "4ea2c7046fc32fe42725f870ad084ec0"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "bc8446fa4e5f23e94e79e7cb1a363b68"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "37187f879fd60c634c4931f7432a6142"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "b5430fd123e0015c77f4e07cab025b29"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "d7145f330fbef970e906890092e107bf"
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
