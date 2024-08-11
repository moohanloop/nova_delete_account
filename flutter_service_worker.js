'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d3ba9ce1566a0cf4dcac0e5024d73a3d",
"assets/AssetManifest.bin.json": "ce8804e8c13d15858e7a4dd6649705a1",
"assets/AssetManifest.json": "212f86e7ab33f7c9d9878b47b5fc38b1",
"assets/assets/fonts/ACC_FALL/ACC_FALL.ttf": "66a22c7a543f2a8faefc3c86e38e6e69",
"assets/assets/images/b1.png": "fa8e877b5422d3fdd5b725e326eef064",
"assets/assets/images/b2.png": "ced74288031934cb408e90851a46eb00",
"assets/assets/images/b3.png": "2abae3ed66f2a8adcc57d5d2f8c1aee5",
"assets/assets/images/bg1.png": "3bbf2648501aee226589d87b89bc6982",
"assets/assets/images/bg2.png": "19188238af46a9edd2c8cedc91f6b59b",
"assets/assets/images/bg3.jpg": "c0d1e250323fd4dfc02f0d006011caf3",
"assets/assets/images/block/blue_block_sheet.png": "35f1404d90f0947fe78b431e61f04bcb",
"assets/assets/images/block/green_block_sheet.png": "6804e3a4d041cecd32c781ffb7cdf788",
"assets/assets/images/block/red_block_sheet.png": "eecb604a8202382979a3efdf7a0e31a0",
"assets/assets/images/block2_sheet_32x32.png": "2119c94ebb24a0c8fa4bffe36b0c738f",
"assets/assets/images/block3_sheet_32x32.png": "82d16d5fc277f878fe998acf47f7fb21",
"assets/assets/images/clear_effect_sheet.png": "3ca078ad16f06d74bf42bca38a8882b7",
"assets/assets/images/crush/f30/ACQ001.png": "31e82a59856121453010be702ff0238c",
"assets/assets/images/crush/f30/ACQ003.png": "7cdcaf393de6890136a03ce0fa75a0ef",
"assets/assets/images/crush/f30/ACQ008.png": "ffc419af3618a3ba005698bbbf71bae9",
"assets/assets/images/crush/f30/ACQ010.png": "84aa56b97e62b7b85a8be8c185e2bcd2",
"assets/assets/images/crush/f30/ACQ010_edit.png": "5e73e4d803b14e16dd76a62c2ddf84c1",
"assets/assets/images/crush/f30/ACQ017.png": "a18243647afbd73e11ab3be68917a908",
"assets/assets/images/crush/f30/ACQ019.png": "7dfa5be969219488694fa561b0742c8e",
"assets/assets/images/crush/f30/ACQ027.png": "1b0ae6a6e54db1a18eb49f533bd914a1",
"assets/assets/images/dummy_image.png": "0e3a6096212efdffd9be6c2dbea24b1e",
"assets/assets/images/effect_sheet_32x32.png": "c884748c1181e7966e7ee8a800cc53f4",
"assets/assets/images/gift.png": "f041869ac6b0c6cd7f275cdd535330e9",
"assets/assets/images/gift1.png": "8dcc78aae39e85dd1fbf643075b00ef8",
"assets/assets/images/gift2.png": "07e418e02a49eb85da78e3e5889b50ba",
"assets/assets/images/gift3.png": "db6e011d8f7128e071c40b62cb07bd2f",
"assets/assets/images/gift4.png": "45514aa7dba1965a100abd42df2ca803",
"assets/assets/images/gift5.png": "cb0df9849ab8ce73fb53827fd95281fc",
"assets/assets/images/gift6.png": "bb33f8b7e9d92f6274ed9c72d00610f1",
"assets/assets/images/gift7.png": "7bf8fdb8183f7d31596a8efc76539b3c",
"assets/assets/images/item/multi.png": "951f8b19fbe9e22c38f09bde44d0325d",
"assets/assets/images/item/power90llgg.png": "84cc8aab2aec8863d5767a1b0f148a88",
"assets/assets/images/item/size_up.png": "5647dcb6b25a1f30ce23de0f7001ea39",
"assets/assets/images/item/speed_up.png": "38088090513445245c011020ccf1617c",
"assets/assets/images/item/time.png": "f833218489bc10420c26337a903d2028",
"assets/assets/images/newva.png": "9ca499964e8941d79429baa852d1221b",
"assets/assets/images/newva2.png": "26381c2b29efd3e0ce73d2f58d29c49a",
"assets/assets/images/nova1.png": "bd6cb48c8c68c9e6bdd3b890baedf25a",
"assets/assets/images/nova2.png": "8747379658a6e4423749e838388923db",
"assets/assets/images/result1.png": "cef0f76454b2ad27dbd2fc8891077fac",
"assets/assets/images/sign_in_google.png": "e0e11adbea58ae80ce7bbfde4f5973e1",
"assets/assets/images/ss1_100x100px.png": "1ce94aa93d469c2549e22a932ad274c2",
"assets/assets/images/template/background_template.jpg": "59e97093fc28d85f1bd9475ad7f7c1e3",
"assets/assets/images/template/sandwich.png": "5c4e7f78fb63b16bbab4ad22847df2f8",
"assets/FontManifest.json": "f75864fb704c93ed9d746d2d59e98d33",
"assets/fonts/MaterialIcons-Regular.otf": "6d527d1e322b0af642b64bb07232c422",
"assets/NOTICES": "4dd2d36801cf9c0410cd93676eb68b99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0677684fb5fc03f1a14226ffe8557a6e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "84453c76b6786e59e27d4a8b689bcf90",
"/": "84453c76b6786e59e27d4a8b689bcf90",
"main.dart.js": "333930a2e66d95bf2c4197814c24c69f",
"manifest.json": "7fdf194865f9859ecc4fb4aa91733afb",
"version.json": "71aebe0788b2b60f2edaefb3c57ceac8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
