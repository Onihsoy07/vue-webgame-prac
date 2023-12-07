const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),

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
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),

    },
};