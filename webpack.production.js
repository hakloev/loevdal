const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.js');

module.exports = {
    ...config,
    mode: 'production',
    plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        })
    ],
    output: {
        ...config.output,
        path: path.resolve(__dirname, 'bundle'),
    },
    entry: [
        path.resolve(__dirname, 'index.js')
    ],
}
