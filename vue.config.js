const marked = require('marked');

const renderer = new marked.Renderer();

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options = { pedantic: true, renderer };

        return options;
      })
      .end();
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Demiann || Portfolio';
      return args;
    });
  },
};
