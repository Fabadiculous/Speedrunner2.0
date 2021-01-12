const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

/* eslint-disable no-undef */

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader"
            //     }
            // },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: "file-loader"

                // This bit will allow importing of images. Use in place of file-loader
                // generator: {
                //     filename: "images/[hash][ext][query]"
                // },
                // type: "asset/resource"
            }

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        symlinks: false // suggested by webpack to improve build speed if symlinks not in use
    },
    plugins: [
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, "../")
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "assets" }
            ]
        })
    ]
};
