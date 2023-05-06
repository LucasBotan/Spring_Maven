const { defineConfig } = require('@vue/cli-service');
var webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,  
  
   plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
  
  
});
