// 代理配置
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/', // 目标服务器地址
        changeOrigin: true, // 是否改变请求源
        pathRewrite: { '^/api': '' }, // 重写路径
        secure: false, // 如果是https接口，需要配置这个参数
        logLevel: 'debug' // 用于调试代理问题
      }
    }
  }
}
