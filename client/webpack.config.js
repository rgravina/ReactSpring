var path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    cache: true,
    mode: 'development',
    output: {
        path: __dirname + '/../server/src/main/resources/static/built',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    }
};