const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/localhost':{
        target:'http://localhost',
        pathRewrite:{'^/localhost':''},
        changeOrigin:true
      }
    }
  }
})
