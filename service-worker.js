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
    "revision": "99e6434025d3bb84687518229611c348"
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
    "url": "assets/js/app.71c41357.js",
    "revision": "a2c5523d0173db431f991f9227cb716d"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "b83cffb3b81a2ed4d1e907411eba9af7"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "a62de28521cd373531d2d7a3b9a5e231"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "24aa048503812b95511d3b9dbfb5b96d"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "f2a281fd8a31da0cd3350c187326d34c"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "214a955c4c3d1adc46fda30ab68d1b6f"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "1466c319f0f7724aca9db90caa92e809"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "3f3efad54dff8d4987757087856ac2b4"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "821cc5f33dc6185fdd825ab4d7ef98b4"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "fb56ad29271827fc2f6004ea9eb57c69"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "da3b7e69e5c46241c667337865e7da90"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "c6b91d25777c4db93e53ead5925f330e"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "d063f234c9a895b2424d74e928b480c5"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "82a7b05f3d90b614cac8cecaa9565a57"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "fe2a315e528b07f83e32e74755342f3a"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "69e35390a224f471ec49001fa5c3e9bb"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "e6d03fd6e9c3ae87dde44359cb9160ea"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "6e0e323856906d4add66374f6172a119"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "f7feec64b2e50910e0e11e31eba57fc5"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "a72f71818051ed71a064d8c7a1c07084"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "1628a3ed041c8772f8c9101b46958f6c"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "50777abac270b8f610918acd3c9ad36d"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "99a9927a1bfbb696b38bc39355975ce3"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "88d724463d5abea6b0c7c234cba35aa7"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "da8483696957842d48504c6026ef681a"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "58bbd256898b7554f774de2c5e29c881"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "9c3f018148399d46b3cf6a5abc5402bb"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "7b32c35cb9183b26a59b3d12765ddce2"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "5182ce1ab0e720d79186ffcfbeb108fc"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "2c2ceca37cf73c748bf9bd616d2acbdd"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "136f6f3ddd32d78e64135828d054876f"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "1b3b99b0c9b1af51ae71766a75f29ee5"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "ecc14053ccc99c33d28dcfd61eb520f2"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "b0c34eeae15de3b4014a7c91b8c61eb5"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "768b2b8b017b6bbbe61054318e3a11b3"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "aec626962b739c1731fc367bb05e0ce1"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "88a3f000369dcab22faff514a0e72808"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "a9186c1ce1e926abbfa11aeb1a4bac74"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "38631ad8c9eb7d24951803a16c3319cc"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "2e4081e4c23b7c5090720a195eadc085"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "57f231442feef33beeeafc044ccd3cdd"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "cebf78077653609a8c92b133b8a3b4ae"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "1eb42203b7438f5dc446631f55c504df"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "575b3de10d9d3517784045a7a6bc06b6"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "4b6a50f63d801ed33c923ce29acd2c7b"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "f8a86b4960090355c2999fb4b9843f1a"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "b63803fe70a4bb3a7f3bd42fc0c26b00"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "365220f5ce64e8ba7a30dfdde54e02e4"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "db44ee8e901f762ce067cf57f22718cf"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "7a6f85572dd8c68ca22d96904d7dbbe0"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "286710073a2f90d745277ea472451035"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "1b74e2714f7058db1b872d39b95c3ef4"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "58a37396833598011ec12d9884fb2893"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "04906e6a3166c76a0cbb01fe8d61bb65"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "cfb1243dd6a0a4f9604addef83fd94b7"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "bed3b5ae4ba63641e87e3ce6979aa77b"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "ba954ba20a3308e2f49f5f678dc66752"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "a0454767cedc93d24e27d009e1329980"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "097e368154c806798d0e4cf549344f9b"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "dc123ffc4fa0d49895eb047ed48efd4a"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "89c34359550a0e2ce1f22a55561d5418"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "66bae9c974fb4ce6a9dc9eecbe1c541a"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "a1bb3918e2d740435c00e3afbaec1606"
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
    "revision": "bad19a63a481406995ed374f9ced33fd"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0076d80eebc9f003cd39e5c626524b1f"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "a72279644b2526bb3f6be31de7f01eb5"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "932771a2fa82717e8d09b7d963db641d"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "339af4f078042f67e4ece204ee40b92e"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "fb171d12553673f4e249eec548065ddf"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "15764b61f427442e1cc65de9bf3cd961"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "38ebeeddb127f45f962dfac207ab9fcd"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "a8cefea0f24a509ae1388a6cef504a20"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "1806bbfe33ed71999e3521a22dc8e397"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "eaaaddc267b4d970f49fced19070311b"
  },
  {
    "url": "zh/slate/concepts/04-transforms.html",
    "revision": "cce3f8f6d1274823df457326be2a67e6"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "562692acdd9e9e88f628e4830304c3f4"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "e9e76606645ee15e400f9e098aa41c1a"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "a362d013983a6da16f13a0afd70c4b43"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "6bcce7dfd62c5d3f782ae9158da841a9"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "ae1a9d26ff493aa871c60cc759dd617c"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "7465fa7d66da89a8e229e688eec18597"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "d6adc43b58fd9566ad3bb4e6c05f5e92"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "b04186e633ad7afc200dade3d9956e30"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "f33c4d7aa16b3faf38c24b51db069afd"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "8dea94d66aac74f1977fb2176e2aafbc"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "2c61e4435799f3ea32340f137508528d"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "483e4d6d94a0155e19e43c2de4bfaad0"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "5dbaf9a602fec493f2f5dae0807909ac"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "16461f72f280219eac22ccbb9356b04c"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "2655ce7315931b7732bb9f2f890adc0d"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "9978a2cd6bb4d73821656944c20fb9b0"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "a67d1597882039ac4bf68c5a86452f92"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "260f59950957bfe842f16d3a61a56704"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "a07b8e6b026a4f38d32680b1e445bfc6"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "ceecfe64ca15c721cadb43a9c6856142"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "076bef7a46b8bcaec4d1ae13f13aa417"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "d554fae900d74e4ca2a3a739c1bf4e14"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "38d3007b84e494ab9f08af4873f189c1"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "3189db21a8e2bcb812017547ab8e7550"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "08ec2e3eeeabb5700bf3162d6de5af80"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "8d5d74ab69b0c20f56ca7bf041ea5911"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "ddf0f6963c464c637d91af989fa6fb02"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "d70f765145ace6e51e537bb41ee2c733"
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
