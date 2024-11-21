const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        sketch: './src/sketch.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'template sketch',
            inject: 'body'
        }),
        new MiniCssExtractPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'out/dist'),
        filename: '[name].[fullhash:8].js',
        sourceMapFilename: '[name].[fullhash:8].map',
        chunkFilename: '[name].[fullhash:8].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'out/dist')
        },
        client: {
            overlay: true
        },
        compress: true,
        host: '127.0.0.1',
        port: 8080,
        hot: false,
        watchFiles: ['./src/**/*.ts'],
        liveReload: true,
        open: true,
        webSocketServer: false
    }
};
