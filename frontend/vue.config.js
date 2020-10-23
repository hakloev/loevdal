const production = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: production ? '/static/vue/' : '/static/vue/',
    outputDir: production ? '../bundle' : '../src/loevdal/static/vue',
    filenameHashing: false, // Not able to use hashing together with Django
    devServer: {
        writeToDisk: true,
    },
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        test: {
            entry: 'src/test/main.js',
            template: 'public/index.html',
            filename: 'test.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}
