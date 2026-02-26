'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js$/, // Apply to files with .js extension
                exclude: /node_modules/, // Exclude the node_modules directory
                use: {
                    loader: 'babel-loader', // Use Babel for JavaScript files
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/, // Apply to files with .css extension
                use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for CSS files
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Resolve these extensions
    },
    devtool: 'source-map', // Enable sourcemaps for easier debugging
    mode: 'development' // Set the mode to development
};
