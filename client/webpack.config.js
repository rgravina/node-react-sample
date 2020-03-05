var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    cache: true,
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [    
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    devServer: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8000'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
};