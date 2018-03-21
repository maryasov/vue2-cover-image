var webpack = require('webpack');

module.exports = require('./webpack.config.js');



module.exports.entry = {
    'vue2-cover-image': './src/main.js',
}

module.exports.output.library = 'Vue2CoverImage';
module.exports.output.libraryTarget = 'umd';
