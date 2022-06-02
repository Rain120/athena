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
    "revision": "6878a729990ca48b463d8d3dcfa5e3a6"
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
    "url": "assets/js/app.ac9eed8c.js",
    "revision": "5cd80ff6d8d856cc633f927e16cf203a"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "b54723a50ebc2bd75c337ace5a666cbf"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "4187e3b49b94be041617e4ffa1d2867c"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "707cc1bf2852bd2897177be6484489c8"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "dff5d181a2cfcac0c9a9063c95f5d744"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "e54fbfd845400de98e0b0a797f7247cc"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "5560d1accb64b8f667b34a0ff3c81621"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "24bfe0f9e453d1b8374655787e091687"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "0660b4a477e570418c04280a2cc51aaa"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "17ff34ea966f0734ecbcea8d58c28399"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "4538b673e8c5e7ca9669d2d326835c4c"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "a0c86ca6c0ba048bbbe6338eee176ef9"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "f9a874af2700cc5756bda25637b272d4"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "2584f4d2080144c577a48c810cf4fc13"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "de68cc8870a18a7821c062913db5b44a"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "85351aba56922ab23d4c118baa4971df"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "ddc74f682d9e7e70fb842110d829e53c"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "2b87684f2c7f538730200f30677e9b38"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "8e50d75621772aa010de670cc71c23f2"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "fb095d4a03c0570fb4440802821ccea8"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "e18e5f3abc26b0ec9e2e2f9a6b4170e0"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "06c1fa7b88976ad3afe7e98fa5c31159"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "98005e0567f7d41e195aae423ce84c2f"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "60ae0f66ee82415ad6ab08fc75880d76"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "159cf3b820361615fdd9dde3ff992dce"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "64d68b9f2459e6a0820bcc9637b295a8"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "c308c538d0723341ea064339ef015f11"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "9dd6e7fa822a0bd104eab372ae1f9699"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "1aacb301b8202e2558478d1a00a84df7"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "c77e8d2e893527908359fb1c2db5ada1"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "29ca6a15cb9f13ec6e19a11c8b3bf1da"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "2ae57f7c43be79439e83b421a6b1a5aa"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "5324707b502ab2e13f592c440dcf61a8"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "9d669a86e2233aed59b0184e9cfce352"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "5e90cfaf6954c732018322976a6de6d0"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "8b1c7adc3dae1f39a8cfbb6f2d406b83"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "6d48f39a2ec9f48977f0336fbd1ebe0a"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "26bcbd090f3516b25eeab90bd93f20eb"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "7bdbb5c2ab05f76410f58fa37014622d"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "31f7eca57bb85c5446ad177ebec873bd"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "6b47d57c876023602d90c79e689e8b00"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "048576bd9105bb1d4b34756843104043"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "d793d0c6862ebf4a52f9c4093d2d4155"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "2c1e1d3932d05003b06bc2699c0a9e9d"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "49c01d724105ec04ea5cc6455b9aff03"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "6c2671a6be1b781c3b03b59bc65ee984"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "c605b95df5b511ac04c88b7aa116fb76"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "2e0c8d75af87b2d604c099787bff6062"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "2aefa3dcb3cb65e5e2bb6545a872667e"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "6714c5fc974b58ba468081051e6fda2d"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "5619dd8fbd5a05fb817e95d5fce5f304"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "22672a596f820525ff96ce4d277a0e9c"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "fead78ba36c9b7e26078c22ab1271b5b"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "06e939b1a390d3c37ae652966adcd5b6"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "aea306628f2dd9ed456b09ab443f0cc8"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "5d11a4ab2eff3810c79d563add1a0bc8"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "5b257077db7d1512e122c2c94b612af1"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "a55efaec5bbf21d6110aeb2feec5ca08"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "d8c6db125402958d578a13f600f440df"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "9f5b4c176edbaa87775d557034b8b768"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "48fd02b4d96433a68076a11621995c14"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "cddbc2a687bbfd39bc6c9361f1af29f0"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "d3edac931aa2781aea3815a5d64924ff"
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
    "revision": "cee0d596bf58d43ec09a2553f6f9a95b"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1486ae8a5583d5c5e03fd47b3e30a0d8"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "1bd0c314b04b4242c1052476b2330db8"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "475360b35cffd58423532e1bae95220f"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "2ddeb52145790d05940837c9ceb4e1c0"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "d421c6607b09d54b8d6da540e4e43e10"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "36502beb2aadced984eaeb2ccf389cc1"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "98faa0ebd10627f69e26c03d27910ee9"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "42057d671dbb0a362023cc0287a64d88"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "18a65275719e1fe5ca46bb699aa50686"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "b4e10f42320bcb09447582a3f0225bfb"
  },
  {
    "url": "zh/slate/concepts/04-transforms.html",
    "revision": "b05efb92097b74a422e9e276675e204e"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "c6020d854d550fab2ae2d1908a75d24f"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "63ec3b15ac1a66731a1541bb7966af8b"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "9bd3f79f9899c5fcecb54c0eda550445"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "0cc92d238b47547bdba77517293e4655"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "4a5f1cf9592ab1965967de8c806a5ce5"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "92d8cba5ae1974f0b0e6e99e2e5e8837"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "1110db1634a5eb6462adb060d19d2ecd"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "0f9022b65c6a8bdeb5b97f3d45c825d5"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "ef3f6792c66b34230f3b8d68ebb176fd"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "d9aac839b01356d90ebf47a58069669e"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "f850ff3aa47a2e140ae26dd37be10fb0"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "37f7be1d5c3508ab5c5350656129ed08"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "1cbf11a43ba941e69d1dc204769f8df2"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "2c69a874d00f3a8797b7f6d662ea06fa"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "0f814f797aa3ba18b9335dbaff41d0e7"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "0750541c6d6dcfe5b90c9e0bcf6a2c72"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "95a68d4f76e3f200fcbc2341e389fc7b"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "d2449ae2988edabe04129fe351350acd"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "8f80178ff033abb35f431e6eff4cebb0"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "514f06693ae74bde620a195c77aa034f"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "52686d19e1d857c62867b4bd3b691d16"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "b7b53baa937f0f03182533fee01d698f"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "0b30f9f96476d5cb75a956833e2f5c33"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "4359bc3e230869fb84f76dd80c86cf4d"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "9fe3fa14c3ef161668f0b6f245e46bcd"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "c54d3ee24182f6d1585e05b72ede99d6"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "cfb261afa0b12a1ee3e88f7dc95b392f"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "a192f9c48e88a9fcc5a9c1e5e867939d"
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
