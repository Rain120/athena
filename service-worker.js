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
    "revision": "9c65472fe8cf2c6bf6885eeb5a26fb44"
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
    "url": "assets/js/10.5e90f3be.js",
    "revision": "9780a0e3692a487fd15837414bf56bf3"
  },
  {
    "url": "assets/js/100.b5d3536d.js",
    "revision": "ba669b89602662d40c351eb7040da1fa"
  },
  {
    "url": "assets/js/101.a7acea5b.js",
    "revision": "7d463862c3393534e41a2c7c027b545c"
  },
  {
    "url": "assets/js/102.05acf9c9.js",
    "revision": "ef52a8d65360035db71e1a6e5d7bf54e"
  },
  {
    "url": "assets/js/103.c597f9f1.js",
    "revision": "e27bb3d14b60f8c5b62441c6464d574e"
  },
  {
    "url": "assets/js/104.5d9c3176.js",
    "revision": "7d7fd79859ae9e94f4d2280e5f61d1a1"
  },
  {
    "url": "assets/js/105.25c3243b.js",
    "revision": "bec3ff56c59de0574d50c7dffa7b92e4"
  },
  {
    "url": "assets/js/106.946ae48f.js",
    "revision": "21cdf36ab58aed3406bd2237ac1e5b18"
  },
  {
    "url": "assets/js/107.93af7417.js",
    "revision": "19b7792ff3c86a0d9097d488085c9a74"
  },
  {
    "url": "assets/js/108.0e4a3e00.js",
    "revision": "df963045d6e0af1618d57f1eaa3b86d2"
  },
  {
    "url": "assets/js/109.df0cbe46.js",
    "revision": "9f85d48da5e20e1d84c866899326e854"
  },
  {
    "url": "assets/js/11.1873a5ba.js",
    "revision": "59b41edc54f958237208799e17627ed3"
  },
  {
    "url": "assets/js/110.852d06ec.js",
    "revision": "68c8e7ae8aac2c6e3ebf284ff62724c5"
  },
  {
    "url": "assets/js/111.c46ab620.js",
    "revision": "62a39ab448eee7d5d166c6ac13855cc1"
  },
  {
    "url": "assets/js/112.d61a04a3.js",
    "revision": "2ef25b181cebf08b87b49ac461550362"
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
    "url": "assets/js/15.38046ffc.js",
    "revision": "01598c16d5eed4eeb108805d969083d7"
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
    "url": "assets/js/19.5717e1d4.js",
    "revision": "05f96959108b1377870a72b80cc78555"
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
    "url": "assets/js/30.1f543026.js",
    "revision": "755e8d533bcce30915d42d64a0aebbc9"
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
    "url": "assets/js/33.29417bd4.js",
    "revision": "72bd34267feb575ba6f8fed187d96074"
  },
  {
    "url": "assets/js/34.ac006ff0.js",
    "revision": "11718032257052642e3c252d42fc6a2a"
  },
  {
    "url": "assets/js/35.879c8d71.js",
    "revision": "6b0daa0aedd152d8321df07925a07a25"
  },
  {
    "url": "assets/js/36.e186f79d.js",
    "revision": "2ccfc65b3ff1ba50231ecb2ca64eb1aa"
  },
  {
    "url": "assets/js/37.443e11df.js",
    "revision": "6224233b58d51257cec8843818b3a725"
  },
  {
    "url": "assets/js/38.9b9d68fa.js",
    "revision": "d0057fa98853e2e60082d6fa5d063504"
  },
  {
    "url": "assets/js/39.fa995a18.js",
    "revision": "00add29dcba913edcd9497dc67673f42"
  },
  {
    "url": "assets/js/4.9c03ba9f.js",
    "revision": "8223cd5d37c4c2c9b02fe0dd006946ad"
  },
  {
    "url": "assets/js/40.d840b394.js",
    "revision": "114cf70e59a69f8bfb7ff718ae8c5802"
  },
  {
    "url": "assets/js/41.e57f0cba.js",
    "revision": "77cdbc603a7b0aebf8b8db96ff702ae4"
  },
  {
    "url": "assets/js/42.f9a50160.js",
    "revision": "9ee3e537216e68b323eb21ebc12703e1"
  },
  {
    "url": "assets/js/43.3dbfa835.js",
    "revision": "ca98995bd5da457b376ee2d59dfc92ec"
  },
  {
    "url": "assets/js/44.4cbdf59c.js",
    "revision": "5107aa21ef9f84df38609612d097ed5d"
  },
  {
    "url": "assets/js/45.95807bb6.js",
    "revision": "6d657ae332723d0e3c565bb4ce7affe0"
  },
  {
    "url": "assets/js/46.410b0e8d.js",
    "revision": "3e84c541b4666f41d0c18482fa0d3267"
  },
  {
    "url": "assets/js/47.a9911453.js",
    "revision": "228d44930c4d8db708960bb4c2b46839"
  },
  {
    "url": "assets/js/48.4ee58869.js",
    "revision": "3af993549924ca7fb44df4ad0b04c6dd"
  },
  {
    "url": "assets/js/49.663448d6.js",
    "revision": "8418525bc82d29be750b768b304db916"
  },
  {
    "url": "assets/js/5.7204e42b.js",
    "revision": "ce8d33857d430ce07148d54c702feeef"
  },
  {
    "url": "assets/js/50.0597a883.js",
    "revision": "a1a053741b3037188f25481a9e5f5791"
  },
  {
    "url": "assets/js/51.097c86b8.js",
    "revision": "80a5cf94f2f203d054b73d29e64d6918"
  },
  {
    "url": "assets/js/52.2332fc25.js",
    "revision": "608e151efe9a7b10224557a207b096c1"
  },
  {
    "url": "assets/js/53.aecca29e.js",
    "revision": "979cf922322427159c651672523a1c83"
  },
  {
    "url": "assets/js/54.0d2bf4e0.js",
    "revision": "045896e9aae9336433919d53bf2f0b32"
  },
  {
    "url": "assets/js/55.36037c09.js",
    "revision": "d225b04d0b8e3aed7fcc32304945bf98"
  },
  {
    "url": "assets/js/56.24bdb23e.js",
    "revision": "eff69252e0dd1ba30128c3220d2e1441"
  },
  {
    "url": "assets/js/57.af291587.js",
    "revision": "cff9d45425778f4dc428cdef87455373"
  },
  {
    "url": "assets/js/58.248cea95.js",
    "revision": "12bdb014ae8ce464dfc244e7240cafa9"
  },
  {
    "url": "assets/js/59.ea9ff5cb.js",
    "revision": "d303e9bb817ba6547fddbc64824b853c"
  },
  {
    "url": "assets/js/6.cb6ee3a6.js",
    "revision": "f3200feabe6da89d7dfd33cb06abb6f7"
  },
  {
    "url": "assets/js/60.e0977bf5.js",
    "revision": "0425c09ed6da38b3c5fd7497022bc332"
  },
  {
    "url": "assets/js/61.ea107628.js",
    "revision": "5f95327ffb833b091336a07ebb1dacb0"
  },
  {
    "url": "assets/js/62.b3dad5a5.js",
    "revision": "d5dfcc3f5d1f05706d88a3ab52135dba"
  },
  {
    "url": "assets/js/63.dea42141.js",
    "revision": "da46071af10b64e73842e334a3b18ef3"
  },
  {
    "url": "assets/js/64.6a23b7c5.js",
    "revision": "8ab2d0c8867b86a084cb2e5e28958b6e"
  },
  {
    "url": "assets/js/65.3b46ea36.js",
    "revision": "85392a9b50ef4cbff0e93ad6233a300f"
  },
  {
    "url": "assets/js/66.cba66bfe.js",
    "revision": "fd81f8a7021a19f2a1be84d643ecf87c"
  },
  {
    "url": "assets/js/67.80eab42b.js",
    "revision": "096fc8e91762be241f69e6cf02a1ccc6"
  },
  {
    "url": "assets/js/68.ea695c89.js",
    "revision": "0c9da12e6719ea8d1c49a4ad05eecab8"
  },
  {
    "url": "assets/js/69.cbc02fb9.js",
    "revision": "1f093bb60bf774a0e4470038c47f20f3"
  },
  {
    "url": "assets/js/7.5dc8ff33.js",
    "revision": "10d6352fea02f2993ee62e0a3649c673"
  },
  {
    "url": "assets/js/70.b9bca713.js",
    "revision": "7c07c7d1c19326db265bc0846edb7f57"
  },
  {
    "url": "assets/js/71.203e8fff.js",
    "revision": "3650d77514566995310fe08e67841ae9"
  },
  {
    "url": "assets/js/72.ade60772.js",
    "revision": "ac654111fdf282e94eb85a6f772c5324"
  },
  {
    "url": "assets/js/73.035dc4ca.js",
    "revision": "9c7e33b52e13af44d609969fc203d9db"
  },
  {
    "url": "assets/js/74.36ad3303.js",
    "revision": "97056742eb7b5adfa0101e21b32ee518"
  },
  {
    "url": "assets/js/75.20a806ea.js",
    "revision": "5d0b5b91b4218789df2ec6499c652804"
  },
  {
    "url": "assets/js/76.6fb4a30b.js",
    "revision": "4132423ea97ac8a55af3de2b74dfb11e"
  },
  {
    "url": "assets/js/77.978384be.js",
    "revision": "c0b47d251d473c87e3b8cb020ea52e51"
  },
  {
    "url": "assets/js/78.adab8e37.js",
    "revision": "6a9c554fe9d2bb32c4d119fea731ba50"
  },
  {
    "url": "assets/js/79.ce034f44.js",
    "revision": "89dfed121f5b0d23c2ad06b3c5af1fab"
  },
  {
    "url": "assets/js/8.7766c748.js",
    "revision": "dfc24d5cb902cc1fcf35bb1488091ab0"
  },
  {
    "url": "assets/js/80.0b279ceb.js",
    "revision": "1a9600bd3010f936407d6e1fd0dec1e5"
  },
  {
    "url": "assets/js/81.351da3b7.js",
    "revision": "ae03e28822c363a855ce3a3dbbaf7581"
  },
  {
    "url": "assets/js/82.fa196150.js",
    "revision": "3f81c9a13f0595e39e4928a97921da53"
  },
  {
    "url": "assets/js/83.3b0286b3.js",
    "revision": "e7b358a22abcfd51e75595ad5a82e5cd"
  },
  {
    "url": "assets/js/84.2bfb120d.js",
    "revision": "e5dbbf537a1fba3cf237ed92b72afcdf"
  },
  {
    "url": "assets/js/85.e34e5ea4.js",
    "revision": "6978f1cf92e9cf9c54f5b43d82d0e7d2"
  },
  {
    "url": "assets/js/86.0d49629c.js",
    "revision": "76e17aa27896bdfe6af55bae1bb85cda"
  },
  {
    "url": "assets/js/87.b0ac3336.js",
    "revision": "bd063d2943611c2be7678bc13f02deb1"
  },
  {
    "url": "assets/js/88.efa1e700.js",
    "revision": "1099ae7bfbee7101d5948fda6d977e97"
  },
  {
    "url": "assets/js/89.89b8706f.js",
    "revision": "407e635cbbbe788351c1173a3e63c5be"
  },
  {
    "url": "assets/js/9.1c10d7f7.js",
    "revision": "4b885878e7f2204c66408eccff8c9b94"
  },
  {
    "url": "assets/js/90.603ecf32.js",
    "revision": "477c2b315a39244c36936b4f4dd8fea1"
  },
  {
    "url": "assets/js/91.a0379436.js",
    "revision": "bd2d4d6cd37f4c5c8baee68599db0a9d"
  },
  {
    "url": "assets/js/92.2b28ad81.js",
    "revision": "9247fc5b3567b12594fd714ec95fe91e"
  },
  {
    "url": "assets/js/93.db4c2f27.js",
    "revision": "776306f66ec33e69bc8a563c612f7985"
  },
  {
    "url": "assets/js/94.2802ee39.js",
    "revision": "24f041f1383316fded9d55854554412a"
  },
  {
    "url": "assets/js/95.0f3f9f40.js",
    "revision": "6d2eda32864a1db14644485036b1a320"
  },
  {
    "url": "assets/js/96.bd570617.js",
    "revision": "7bc3633c38478ba6d0d1812af9e37547"
  },
  {
    "url": "assets/js/97.e476fa10.js",
    "revision": "0db0b6c2a6c25aac57e53dee29655331"
  },
  {
    "url": "assets/js/98.925c0d2f.js",
    "revision": "f0b970c888a4b80f7f1cb4ccdc3319a6"
  },
  {
    "url": "assets/js/99.aa8e5782.js",
    "revision": "d2e7a23c9d7e9100eb22a8123125cac2"
  },
  {
    "url": "assets/js/app.52ce7b84.js",
    "revision": "0926f3153af6badac344de1962126a53"
  },
  {
    "url": "en/slate/api/locations/index.html",
    "revision": "a6fe8ca513a2450e766c5a7bdc80987d"
  },
  {
    "url": "en/slate/api/locations/location.html",
    "revision": "4f1a723d8acaf8a40524acb1f22d7636"
  },
  {
    "url": "en/slate/api/locations/path-ref.html",
    "revision": "d955842b0f4a5e7b562f6c7401d5e5b2"
  },
  {
    "url": "en/slate/api/locations/path.html",
    "revision": "17cf217833c7accba38cd1408e862ea3"
  },
  {
    "url": "en/slate/api/locations/point-entry.html",
    "revision": "e2711c17e08b0a908645d02ac400e410"
  },
  {
    "url": "en/slate/api/locations/point-ref.html",
    "revision": "76cc09a7db7af033c7c089c108683e56"
  },
  {
    "url": "en/slate/api/locations/point.html",
    "revision": "8eb8e24db15912f57cb4fe73b21dec12"
  },
  {
    "url": "en/slate/api/locations/range-ref.html",
    "revision": "3a7f627233367b4e30aef115c82fba10"
  },
  {
    "url": "en/slate/api/locations/range.html",
    "revision": "c8c0c9f49061ccdd8b2b18f71cb6bbc3"
  },
  {
    "url": "en/slate/api/locations/span.html",
    "revision": "93bc3ac315974e19ac63e519c3f17665"
  },
  {
    "url": "en/slate/api/nodes/editor.html",
    "revision": "4b8e0a6ca114cb269c639fe0f6b342ef"
  },
  {
    "url": "en/slate/api/nodes/element.html",
    "revision": "9b3a496d11dd1df5619058eefb24946b"
  },
  {
    "url": "en/slate/api/nodes/index.html",
    "revision": "f5c506811635654ea6518f7cb96d5181"
  },
  {
    "url": "en/slate/api/nodes/node-entry.html",
    "revision": "6c70aad9beb40ad49fca1411efd34802"
  },
  {
    "url": "en/slate/api/nodes/node.html",
    "revision": "53244cf4dc063887827c3f5b1f0f05a0"
  },
  {
    "url": "en/slate/api/nodes/text.html",
    "revision": "cf2efdc48f18dd794810e621f1a8dc3c"
  },
  {
    "url": "en/slate/api/operation.html",
    "revision": "dfdd73f88d3d009f8b18336e5f550d0f"
  },
  {
    "url": "en/slate/api/scrubber.html",
    "revision": "436657982ac58d6f9824358fb92d0ca2"
  },
  {
    "url": "en/slate/api/transforms.html",
    "revision": "005dc8435ee5db4b4eed919d43240b44"
  },
  {
    "url": "en/slate/concepts/01-interfaces.html",
    "revision": "58186c5b9c1e66e2857b7f9bc4e937c7"
  },
  {
    "url": "en/slate/concepts/02-nodes.html",
    "revision": "36b81818a449a060ccc65e1aaffed503"
  },
  {
    "url": "en/slate/concepts/03-locations.html",
    "revision": "c49725f16d6966ee2c0d1a274f8fa44e"
  },
  {
    "url": "en/slate/concepts/04-transforms.html",
    "revision": "7522134579de22e64afa5225a5bbba71"
  },
  {
    "url": "en/slate/concepts/05-operations.html",
    "revision": "8ea90d333553402a91f2e573afae54ca"
  },
  {
    "url": "en/slate/concepts/06-commands.html",
    "revision": "b777b7a8c1942c8adc393076bb6fb6f7"
  },
  {
    "url": "en/slate/concepts/07-editor.html",
    "revision": "9f7ac26dd9e0bad791f686132523a78d"
  },
  {
    "url": "en/slate/concepts/08-plugins.html",
    "revision": "38f99d6a3df837695ea7298f6cd5031b"
  },
  {
    "url": "en/slate/concepts/09-rendering.html",
    "revision": "39058e35383630c1bf9934be4238f72d"
  },
  {
    "url": "en/slate/concepts/10-serializing.html",
    "revision": "aeda2ae8d6aa27374d1c49c7a2b72e36"
  },
  {
    "url": "en/slate/concepts/11-normalizing.html",
    "revision": "4539e3ea97f72b3f8871f05b96531b01"
  },
  {
    "url": "en/slate/concepts/12-typescript.html",
    "revision": "aa073c41a49ba16d573d6eb1c190a270"
  },
  {
    "url": "en/slate/concepts/XX-migrating.html",
    "revision": "4ca26a2b04e1cf2308a89397ec9b8da0"
  },
  {
    "url": "en/slate/general/changelog.html",
    "revision": "23d8faa54a0264c79c0e20ea9cf112b4"
  },
  {
    "url": "en/slate/general/contributing.html",
    "revision": "e01274718809421b02362de163db03e3"
  },
  {
    "url": "en/slate/general/faq.html",
    "revision": "21efb10ca996d0338a9bb347c737a34a"
  },
  {
    "url": "en/slate/general/resources.html",
    "revision": "edd6153ab81118cd371108102fc27f4c"
  },
  {
    "url": "en/slate/Introduction.html",
    "revision": "f9b20f0c2f85f566826179b7c07ff859"
  },
  {
    "url": "en/slate/libraries/slate-history.html",
    "revision": "46349093bc7a9ca490e7cfda3a693a1e"
  },
  {
    "url": "en/slate/libraries/slate-hyperscript.html",
    "revision": "cded4a75cf6e6fc161c6ab49aa62245f"
  },
  {
    "url": "en/slate/libraries/slate-react.html",
    "revision": "fa7680f8316bd681935d11ace2805ef3"
  },
  {
    "url": "en/slate/locations/index.html",
    "revision": "91ca15f1935e2f3750e57841e8373eb4"
  },
  {
    "url": "en/slate/locations/location.html",
    "revision": "8eff7b881818159a66de0dff09c91447"
  },
  {
    "url": "en/slate/locations/path.html",
    "revision": "14a1edd384be4b6d6e74eeec9439ff5e"
  },
  {
    "url": "en/slate/locations/point-entry.html",
    "revision": "efb6c27a43a21c2958ebe7a0c07ba919"
  },
  {
    "url": "en/slate/locations/point-ref.html",
    "revision": "2a6a02e1dd546036e01621164bc9dfd8"
  },
  {
    "url": "en/slate/locations/point.html",
    "revision": "4f77242d528d4a942b9117734d464ce0"
  },
  {
    "url": "en/slate/locations/range-ref.html",
    "revision": "d2616c441e112d4ca4a09c3046a76c5a"
  },
  {
    "url": "en/slate/locations/range.html",
    "revision": "604c7787cfdade3bce4af32b77027700"
  },
  {
    "url": "en/slate/locations/span.html",
    "revision": "c13f43469188bafc86a8e279fdbbea97"
  },
  {
    "url": "en/slate/nodes/editor.html",
    "revision": "961bdc9542a07bcba37b2fe386fe173a"
  },
  {
    "url": "en/slate/nodes/element.html",
    "revision": "318e3805e93622df8259f8229e53e737"
  },
  {
    "url": "en/slate/nodes/index.html",
    "revision": "d274dd736f2b0bb31099cf5b51f76163"
  },
  {
    "url": "en/slate/nodes/node-entry.html",
    "revision": "cf07408a715a0ec3c06b2c829fc06102"
  },
  {
    "url": "en/slate/nodes/node.html",
    "revision": "6fa2f938910cd32da60b2c462dcd4418"
  },
  {
    "url": "en/slate/nodes/text.html",
    "revision": "7c9101c03cb60763d8067acbbab4df41"
  },
  {
    "url": "en/slate/Summary.html",
    "revision": "c028781ab8dffc8b9f94f5f7c8149035"
  },
  {
    "url": "en/slate/walkthroughs/01-installing-slate.html",
    "revision": "533c080c8db0b65200813dcfc8b4de1a"
  },
  {
    "url": "en/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "14a9900c704c0b706ea9e68d2157f725"
  },
  {
    "url": "en/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "142c3201f2a80338897d59e9cf986347"
  },
  {
    "url": "en/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "db9e515941e6be22dc7dd73ac8c5bc12"
  },
  {
    "url": "en/slate/walkthroughs/05-executing-commands.html",
    "revision": "4ef19237770fd7d3863dd178074cd8c0"
  },
  {
    "url": "en/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "a26eb852a0efd6e9bdb9839d770d6855"
  },
  {
    "url": "en/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "0f08fa59ceb42b7b95a5aace038af012"
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
    "revision": "ebfe1470487b006a934b3c527861d1e4"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "60c0c65bc09c344fc5216fecd1afa733"
  },
  {
    "url": "zh/slate/api/locations.html",
    "revision": "6fc9b05ba8a7018632da74a4279dae3d"
  },
  {
    "url": "zh/slate/api/miscellaneous.html",
    "revision": "61d5960aadd3acddbf1397d2aaf0cb44"
  },
  {
    "url": "zh/slate/api/nodes.html",
    "revision": "4aa7e003370e3d48afb15ba04dbaafd3"
  },
  {
    "url": "zh/slate/api/refs.html",
    "revision": "6a6193c63718efcb4948df92010825bc"
  },
  {
    "url": "zh/slate/api/transforms.html",
    "revision": "2ffa9d0569952bd13008e3bf022ffb7a"
  },
  {
    "url": "zh/slate/concepts/01-interfaces.html",
    "revision": "d5f96a8e03ad3e2e56d82ecd95077096"
  },
  {
    "url": "zh/slate/concepts/02-nodes.html",
    "revision": "fd9c5ba1ed363147c62a755fde39e3ad"
  },
  {
    "url": "zh/slate/concepts/03-locations.html",
    "revision": "a3dc38c7f731e4c821f3e74915d6db9e"
  },
  {
    "url": "zh/slate/concepts/04-commands.html",
    "revision": "06169e1219f5a7be1b622d15d6ed9500"
  },
  {
    "url": "zh/slate/concepts/04-transforms.html",
    "revision": "44a046a6d9b19ce494378f2ffb17e4a3"
  },
  {
    "url": "zh/slate/concepts/05-operations.html",
    "revision": "a8be4daa2dda8f9b742f3261a7627fce"
  },
  {
    "url": "zh/slate/concepts/06-editor.html",
    "revision": "ebbfd368c2fd6c038952721b016fdf33"
  },
  {
    "url": "zh/slate/concepts/07-plugins.html",
    "revision": "702f463ba60ca165f9eef352aac4a655"
  },
  {
    "url": "zh/slate/concepts/08-rendering.html",
    "revision": "e4fc4fd23ca008a0491531b2ae9a8164"
  },
  {
    "url": "zh/slate/concepts/09-serializing.html",
    "revision": "84e27615ccaf3c1bff1f62fa683797f6"
  },
  {
    "url": "zh/slate/concepts/10-normalizing.html",
    "revision": "6afd4104ec1070ee44ccaa5b383d8998"
  },
  {
    "url": "zh/slate/concepts/XX-migrating.html",
    "revision": "ca47bbb10e5ef6d059f24a64c199c578"
  },
  {
    "url": "zh/slate/Contributing.html",
    "revision": "3b04ecad05e96ff52fcdbafe19065416"
  },
  {
    "url": "zh/slate/general/faq.html",
    "revision": "c37d760b764d978a9f2f3569aa28c3a4"
  },
  {
    "url": "zh/slate/general/resources.html",
    "revision": "8a45da536c6cd80ec4407d38b3ce86a2"
  },
  {
    "url": "zh/slate/Introduction.html",
    "revision": "54b339eb5a3c0133137c64b100019d72"
  },
  {
    "url": "zh/slate/libraries/slate-history.html",
    "revision": "f7e2eb6d7adfff2fe7da1c236f2e0951"
  },
  {
    "url": "zh/slate/libraries/slate-hyperscript.html",
    "revision": "95e249d2bb567d41066cb968bd81307a"
  },
  {
    "url": "zh/slate/libraries/slate-react.html",
    "revision": "ed0960bc53cacc7bbe681183ba5c982a"
  },
  {
    "url": "zh/slate/note/blog.html",
    "revision": "b080a85160275e7b2cf20a044536cb7b"
  },
  {
    "url": "zh/slate/note/design-mind.html",
    "revision": "85c78b8f6df97a777b1a14cf8418ab59"
  },
  {
    "url": "zh/slate/note/plugins.html",
    "revision": "6002f19ccc23b156da66cecfbffcef49"
  },
  {
    "url": "zh/slate/note/schema.html",
    "revision": "3c8803fff8a1943066fcf88d29d4eac2"
  },
  {
    "url": "zh/slate/note/selection-range.html",
    "revision": "86cb7ee48fee9580185c11a325316d6f"
  },
  {
    "url": "zh/slate/SlateStart.html",
    "revision": "019ac7ee3ad6f991138e61b30f5a5e16"
  },
  {
    "url": "zh/slate/Summary.html",
    "revision": "34a5259ffe6d817d69c43ad1a0c894f0"
  },
  {
    "url": "zh/slate/walkthroughs/01-installing-slate.html",
    "revision": "f847c824330daf19b895f0b5da0e4bdf"
  },
  {
    "url": "zh/slate/walkthroughs/02-adding-event-handlers.html",
    "revision": "78a2875acc001da8b6f94890c2c6bbf7"
  },
  {
    "url": "zh/slate/walkthroughs/03-defining-custom-elements.html",
    "revision": "07af89ae4a1dbd1051522ff5fbd332ca"
  },
  {
    "url": "zh/slate/walkthroughs/04-applying-custom-formatting.html",
    "revision": "c9223d5139c4df79ea162ff0cd48b305"
  },
  {
    "url": "zh/slate/walkthroughs/05-executing-commands.html",
    "revision": "b15ae002121bf8e74ac68cfbe54d1880"
  },
  {
    "url": "zh/slate/walkthroughs/06-saving-to-a-database.html",
    "revision": "428a5ea35a83a5a2cfe2b9fb98b07541"
  },
  {
    "url": "zh/slate/walkthroughs/XX-using-the-bundled-source.html",
    "revision": "ad1f568220779b53ffb29fe416cb3212"
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
