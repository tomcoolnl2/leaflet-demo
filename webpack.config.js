const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,  './dist')
    },
    mode: 'none',
    devtool: 'inline-source-map',
    module: {
    rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.png$/,
            type: 'asset/resource'
        },
        {
            test: /\.svg/,
            type: 'asset/inline'
        }
    ]},
    resolve: {
        extensions: ['.ts', '.js'],
    },
}