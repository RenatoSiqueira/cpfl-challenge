const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        scope: '/',
        sw: 'service-worker.js',
        maximumFileSizeToCacheInBytes: 3145728
    }
})
