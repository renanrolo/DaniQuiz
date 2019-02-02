const proxy = [
    {
      context: '/api',
      target: 'http://localhost:55132',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;