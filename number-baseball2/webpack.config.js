// 현재 폴더 경로 받아오는 함수
const path = require('path');
// const VueLoaderPlugin = require('vue-loader/dist/pluginWebpack5');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        app: './main.js',

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
        path: path.join(__dirname, './dist'),

    },
};