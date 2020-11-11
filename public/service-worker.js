if (!self.define) {
    const e = e => {
        e !== 'require' && (e += '.js'); let s = Promise.resolve(); return a[e] || (s = new Promise(async s => {
            if ('document' in self) {
                const a = document.createElement('script'); a.src = e, document.head.appendChild(a), a.addEventListener('load', s)
            } else {
                importScripts(e), s()
            }
        })), s.then(() => {
            if (!a[e]) {
                throw new Error(`Module ${e} didn’t register its module`)
            }

            return a[e]
        })
    }

    const s = (s, a) => {
        Promise.all(s.map(e)).then(e => a(e.length === 1 ? e[0] : e))
    }

    const a = {require: Promise.resolve(s)}; self.define = (s, n, c) => {
        a[s] || (a[s] = Promise.resolve().then(() => {
            const a = {}; const r = {uri: location.origin + s.slice(1)}; return Promise.all(n.map(s => {
                switch (s) {
                    case 'exports': return a; case 'module': return r; default: return e(s)
                }
            })).then(e => {
                const s = c(...e); return a.default || (a.default = s), a
            })
        }))
    }
}

define('./service-worker.js', ['./workbox-c2b5e142'], (e => {
    'use strict'; importScripts(), e.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{url: '/_next/static/5c6hUjfqT3GwkdaVY6r31/_buildManifest.js', revision: '6035bb1cf81b2a9d5e183a6f3f9d116d'}, {url: '/_next/static/5c6hUjfqT3GwkdaVY6r31/_ssgManifest.js', revision: 'abee47769bf307639ace4945f9cfd4ff'}, {url: '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.9e69f4a583e56c6af11b.js', revision: 'd1535e436c8addad5cc9d20547f14cb3'}, {url: '/_next/static/chunks/framework.cdbdac0a36200f52203c.js', revision: '56af6501d39d0d407e4004733ea3ef34'}, {url: '/_next/static/chunks/main-4516597d34e0a88720c1.js', revision: '3399ce077e1e7beb68603330441e4ec7'}, {url: '/_next/static/chunks/pages/_app-fcb0595e5c45333c4dd8.js', revision: '98ba8027214b83f551358754e9eea005'}, {url: '/_next/static/chunks/pages/_error-f7d85dafed132dfe3f92.js', revision: '7018d2a3d308105df4265ff59c5376be'}, {url: '/_next/static/chunks/pages/index-d449b9a7104f8718828c.js', revision: 'a16e0716aacd9f5efc96617383aa4e16'}, {url: '/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js', revision: '3c5b148baecf222e205dfe1cb1588bd6'}, {url: '/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js', revision: '8c19f623e8389f11131a054a7e17ff95'}, {url: '/_next/static/css/7f5d721e17bc3f7f1c11.css', revision: 'd172663c483e7a86c98711ad3c2bb7ff'}, {url: '/icons/android-chrome-192x192.png', revision: '1d7960eaa46f62c7662b1a99b1935ea5'}, {url: '/icons/android-chrome-256x256.png', revision: 'e838779dee967a130db759ab8c13ef64'}, {url: '/icons/apple-touch-icon.png', revision: '365a8299775aa5b0ee552b854fba3a0b'}, {url: '/icons/favicon-16x16.png', revision: '01752695e0aa870655e52b7d1a14211f'}, {url: '/icons/favicon-32x32.png', revision: 'bccbb3b911035fe87112ed8d2da2852a'}, {url: '/icons/favicon.ico', revision: '420fb648b4fb7a6c7b66134ff4f6a4ba'}, {url: '/icons/mstile-150x150.png', revision: '2b56513716aa7f2031e735cedbbd8182'}, {url: '/icons/safari-pinned-tab.svg', revision: 'f048912a723ed1fab436bb19a58016c3'}, {url: '/images/brand/logo-cpfl-energia.png', revision: 'b17e197d61f7f7cb0cc6069d90a77d0a'}, {url: '/images/energy.jpg', revision: '2fed4058c1194826886459325a041cb5'}, {url: '/manifest.json', revision: 'ff60d8b0c0b679b6f95c688b1e4c0717'}, {url: '/sw.js', revision: '5dc7d265b6e41eb97dfa1ae1398eecbd'}, {url: '/sw.js.map', revision: 'fa70e3d84520cd1b5cf6136ccf5730ff'}], {ignoreURLParametersMatching: []}), e.cleanupOutdatedCaches(), e.registerRoute('/', new e.NetworkFirst({cacheName: 'start-url', plugins: [new e.ExpirationPlugin({maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new e.CacheFirst({cacheName: 'google-fonts', plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({cacheName: 'static-font-assets', plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({cacheName: 'static-image-assets', plugins: [new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/\.js$/i, new e.StaleWhileRevalidate({cacheName: 'static-js-assets', plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({cacheName: 'static-style-assets', plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({cacheName: 'static-data-assets', plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/\/api\/.*$/i, new e.NetworkFirst({cacheName: 'apis', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET'), e.registerRoute(/.*/i, new e.NetworkFirst({cacheName: 'others', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0})]}), 'GET')
}))
