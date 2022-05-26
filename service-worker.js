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
    "revision": "e7355125c8dc6153ccf17d5081870f86"
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
    "url": "assets/js/10.0791b5d5.js",
    "revision": "d326c75566348a22661c52568372ba55"
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
    "url": "assets/js/104.5183ff95.js",
    "revision": "07039779b17c03487116583528a33cbc"
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
    "url": "assets/js/62.f90a7947.js",
    "revision": "f45d4c889cfda7b95fc58ac27d846eb4"
  },
  {
    "url": "assets/js/63.2db6e67c.js",
    "revision": "eb885b8a86bd623da4fd91541f86b54d"
  },
  {
    "url": "assets/js/64.adeca3e7.js",
    "revision": "92540552c8a6c508641772d2b79fbca8"
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
    "url": "assets/js/88.845c5ccb.js",
    "revision": "b04eb3d581f99cdd85b3e4785b473116"
  },
  {
    "url": "assets/js/89.c311310c.js",
    "revision": "9c96a3da53305b435b09b1ba463ec3df"
  },
  {
    "url": "assets/js/9.4d71fa26.js",
    "revision": "d7fb255633250a5fcd96efa5aad74d0d"
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
    "url": "assets/js/app.22d1171c.js",
    "revision": "1fd55485e653b380f33c7bf088f52236"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "8b5c4e38da94fd2c1e4742a38f5af6f3"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "c0d9f257b592e33eb9a6fae4fc04647c"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "f123494dc894dfe31719e50d66f4f1de"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "8abad48d4c620bb0970ce864d198d935"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "5adac2b4865319839270618c70d06988"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "39dda531210744c95fe5759c7ec476e4"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "325e6533784c372e8eff876d7749e7c5"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "d97952bfc867d281071eccce5323dcda"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "95ee6083e0fdd7523a58556e077eb194"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "fef3a54cbc5fdd7bbf2374bed176009f"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "ea008c2881c8df3445d8303e799dd9f6"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "9bccdfc907bd0d90e5dc1189ae45c2c3"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "2c59e9c894afe3b178246a3656da41de"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "e78cf5d794c50c991af1dfc62c7e66ff"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "3f2a8b9e0a8fae69a2005bc7e6a31fcb"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "d32af302f2b74427de57eac8222bb07e"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "d33b5d02600b3c4a2ff995002132c3b0"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "425420f5f659c0fedc4eb275982fbf34"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "e2cd7ce13c6397f5eb963560ca5b5c8b"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "83bcd9adf7226435c99c88d88d6607ce"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "c75dad0b68d9f3364dcb80f0785e5665"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "5db2feba97d7293e124168c323f1a8f3"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "a82c092caf6af9a6ac6854c27f5d35d2"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "a5577955d1d56263c69b8ca22609e0d2"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "339cf0816d88d2bd8ef102324dc47f52"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "8e41d4fbf27bfa0e0ca884a2a996da45"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "98b789dcf2aa574b0995df4db8234f20"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "804f69639bfff27eb7ded39c2693d0ad"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "fb81bc05c87343a5d2685e4050f6e6de"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "5f86b9dc160d5a27f3c80fcf1baad9b3"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "4f123510326167b61416ab9e93f69c92"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "1203846014d75806556033d637904273"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "ad216bf306c45e871a6e61e70b210e54"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "5f740d7104c946dbb7d56bd881af6197"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "158c393cfe145564703a072a6483a31c"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "48db3cfa0b66f43d3612e37b1368b539"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "b65913dc74420873792be21647974ee5"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "18a438c936916ffc855a7bec5810ac6c"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "dc4f7740dfae4b8a4ed690e5667b0678"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "88b3aa99c69c9f321aa973a56415990f"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "8cad8a8bece5a63111cd696a4406298a"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "fc0383c95aca1bc440a428629ef1e897"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "75f491f4743595ff164089baba09ad02"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "d35beca356a71d7282d3fe2e9455351d"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "47186bcd1aad3c4e4c728c0c3c120fb1"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "19103dbdfbc94e2db74e0a2dd6dd5f21"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "5964c13c513867996f96068647e6aa23"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "3bff07b52c2d14f2633a8aadfbe0a417"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "d51ffbf0eddbcd3f7704c066a821ded6"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "27e6445dc1d93a91647c9a478bf5e637"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "011b78831728e71ebf21e31f36627d64"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "f72e42c10ecbc59330929c5f7feee68d"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "15b4e253fcb6a51f068cae92d3c96490"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "213a34f86d3d3f7a32cea4a28f9c71b3"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "8d8188d2e7ed61e08679071f045eead1"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "5419d33598b2c9f0a7289682e8f4a631"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "3b43e2fca00f07e76e73b1dbe127f592"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "6661a54e04d3b09ebe6bff2cb8e53198"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "20020b52ae8e0520000eb9b96237938e"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "120ed024672708221555fc15ad12c63a"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "374c1b01cf03225b6f4eaffd4ed8287c"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "a91abdb4078c5d6bbcb99eb693e6b50e"
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
    "revision": "988f2e0628fb5a084ecbccf3acd401d4"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0138fed0d0d6a1a967293b97726c98a3"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "59a5112c4e813c2e0bea97dca8333742"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "c3fae40ab2cf9ffed4c726bbb43ebc93"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "9f2f5b45dee8f046b709ed61b05f4a53"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "f1f7f0f3c248049a645f310b045b057f"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "a63040aaf12c99ac350d8a35b6809d5b"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "14028dacac4192f7c4fce78eec9c3f0a"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "be162b230612d4f7e75819f412c783b8"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "f2d89b79558a9b542aeeeb34d6ed0008"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "1917f21bd370fc8a3395cfa267345146"
  },
  {
    "url": "zh/slate/concepts/04-transforms.html",
    "revision": "078fdc2876762effb7f832a8f4a9082b"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "9b9d5204db765bd18e52b9fd4af03346"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "70609f0f31586f767663e658b2cc289a"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "e501addf869d11438d158b907cb62100"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "c249fe7c047ae2505491702bd41c3685"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "794b44ad20d8ed590a648f2df492d6bb"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "2bce315eaf5fe481bd484d668f4d8e21"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "0c285ef721558c9ce0a71483419eb4a5"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "2e08608ce9f743bc6d963e65b6a62cf1"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "e009a7352dc6bfd2a3d4337e6357f28b"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "039bf9dc2b32346e2291f6e41a808fee"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "b17a96c0077c213bb4381f17444448a6"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "c189ea495c2342a6a2bf02297de6dd7e"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "254f5aae1080a11b1aa524abf8f5e34d"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "42bf52f125a703ec78d7127b6862fa1e"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "72caa63062211c18a7c1f5b92b8638f1"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "e984c1a38fef87b74d5c91e4f6ed3e7a"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "e26100331033a265f6cd61d9d7e17946"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "34cc4298ded03c26491fba63c8cf4ec2"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "388ff013606db5a82af62a054e51f3bb"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "cb598b4494ef73e09ca4de3e55a834a1"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "554957aa351f431972bc0be49a0e0633"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "0e058f04a6c6fc5c1f242f9a28816783"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "fa27cfd75618a3a39294a8b8d7d03595"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "6c34d5bc84a11eb0d531a1f73de8199b"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "cc51c8e70fd7d91e486e5038182b0a2b"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "50417f11e82772b7f68b8482055a9e95"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "11948c8d9f9a1d5fd98d0e20806aad4b"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "9c38edca1a7080bdfd6535b9f8844fb1"
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
