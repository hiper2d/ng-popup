var path = require('path');
var _root = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        'polyfills': './src/client/polyfills.ts',
        'vendors': './src/client/vendors.ts',
        'boot': './src/client/boot.ts'
    },

    resolve: {
        extensions: ['.js', '.ts', '.scss'],
        modules: [root('src'), root('node_modules')]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: root('tsconfig.json')}
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/, //compiling loading component styles in stylesUrls
                include: root('src', 'client'),
                loader: 'to-string-loader!css-loader!sass-loader'
            },
            {
                test: /\.scss$/, //compiling and loading global styles
                include: root('src', 'public'),
                loader: 'css-loader!sass-loader'
            },
            {
                test: /\.css$/, //loading global styles
                include: root('src', 'public'),
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            }
        ]
    },

    output: {
        path: root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        // Workaround for angular/angular#11580
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('src'), // location of your src
            {} // a map of your routes
        ),

        new ExtractTextPlugin('[name].css'),

        new CommonsChunkPlugin({
            name: ['boot', 'vendors', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            favicon: 'src/public/favicon.ico'
        })
    ],

    devServer: {
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 1000}
    }
};