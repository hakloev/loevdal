const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        cv: path.resolve(__dirname, 'react/cv/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'src/loevdal/static/public/'),
        publicPath: '/static/public/', // Django's static path
        filename: '[name].js',  // the same one we import in index.html
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude:  /(node_modules)/,
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
