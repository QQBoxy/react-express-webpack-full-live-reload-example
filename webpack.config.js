var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        home: ['./client/home', hotMiddlewareScript],
        page2: ['./client/page2', hotMiddlewareScript],
        vendor: ['react', 'react-dom', hotMiddlewareScript]
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }, {
            test: /\.(png|jpg)$/,
            use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader?sourceMap',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: './[name]/bundle.js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = devConfig;
