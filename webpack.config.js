var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    // resolve: {
    //     modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    // },
    // plugins: [
    //     new webpack.ResolverPlugin(
    //         new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    //     )
    // ],
    module: {
        loaders: [
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx?/, include: APP_DIR, loader: 'babel' }
        ]
    }
};