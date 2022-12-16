
const path = require('path')
const sass = require('sass');
const get = require('./src/scss/config')(sass);

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,  './dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.json$/,
                type: 'json'
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                          implementation: sass,
                          sassOptions: {
                            functions: { ...get }
                          }
                        }
                      }
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
    },
}