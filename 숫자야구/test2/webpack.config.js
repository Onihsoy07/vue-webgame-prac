const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        app : path.join(__dirname, 'main.js'),

    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),

    ],
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),

    },
};