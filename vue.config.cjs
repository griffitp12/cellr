module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/': {
        target: 'htto://localhost:3000',
        secure: false,
      }
    },
  },
};