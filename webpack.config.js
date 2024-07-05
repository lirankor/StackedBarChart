const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin.js'); // Correct import path


module.exports = {
  mode: 'production', // Adjust based on your needs (production or development)
  entry: '/src/Bar.vue', // Entry point for your component
  output: {
    filename: '[name].umd.js', // Output filename for UMD build
    library: 'BarChart', // Name for global variable in UMD build (optional)
    libraryTarget: 'umd', // UMD build target
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