const path = require('path')
const babiliPlugin = require('babili-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

let  plugins = [];

plugins.push(new htmlWebpackPlugin({

    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
    },
    filename: 'index.html',
    template: __dirname + '/main.html'
}))

plugins.push(new extractTextPlugin('style.css'))

plugins.push(new webpack.ProvidePlugin({
    '$': 'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
}))

plugins.push(new webpack.optimize.CommonsChunkPlugin({

    name: 'vendor',
    filename: 'vendor.bundle.js'
}))

let SERVICE_URL = JSON.stringify("http://localhost:3000")

if (process.env.NODE_ENV == "production") {
    SERVICE_URL = JSON.stringify("http://endereco-da-pagina-em-producao")
    
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
    plugins.push(new babiliPlugin());
    plugins.push(new optimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }))
}

plugins.push(new webpack.DefinePlugin({ SERVICE_URL }))

module.exports = {
    entry: {
        app: './js/boot.js',
        vendor: ['jquery', 'bootstrap']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            },
            {
                test: /jquery.+\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins
}