const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/loevdal/src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'src/loevdal/static/public/'),

        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: '/static/loevdal/public/', // Django's static path
        filename: 'main.js',  // the same one we import in index.html
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx|mjs)?$/,
                // don't look in any node_modules/  folders
                exclude:  /(node_modules)/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
            },
        ],
    },
    plugins: [],
    devServer: {
        writeToDisk: true,
    }
};
