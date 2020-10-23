const production = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: production ? '/static/vue/' : '/static/vue/',
    outputDir: production ? '../bundle' : '../src/loevdal/static/vue',
    filenameHashing: false, // Not able to use hashing together with Django
    devServer: {
        writeToDisk: true
    }
}
