const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        register: true,
        scope: '/',
        sw: 'service-worker.js',
        maximumFileSizeToCacheInBytes: 3145728
    }
})
