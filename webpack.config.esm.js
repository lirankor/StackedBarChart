const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin.js');


module.exports = {
  mode: 'production', // Adjust based on your needs
  entry: '/src/Bar.vue', // Entry point for your component
  output: {
    filename: '[name].esm.js', // Output filename for ESM build
    library: {
      type: 'module', // Module build type for ESM
    },
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};