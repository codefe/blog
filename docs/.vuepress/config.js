module.exports = {
  title:'newway_blog',
  base: '/test_1/',
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/' },

      {
        text: 'guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
    ]
    
  },
  chainWebpack: (config) => {
    config.module.rule('js')
      .exclude.add(/(docs\/.vuepress\/theme\/icon\/*.js)/).end()
  },

}