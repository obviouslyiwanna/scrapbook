export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/template/index',
    'pages/editor/index',
    'pages/journals/index',
    'pages/detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff7fb',
    navigationBarTitleText: '手账小屋',
    navigationBarTextStyle: 'black',
    backgroundColor: '#fffaf4'
  },
  tabBar: {
    color: '#8f8293',
    selectedColor: '#ec7fa9',
    backgroundColor: '#fff7fb',
    borderStyle: 'white',
    list: [
      { pagePath: 'pages/index/index', text: '首页' },
      { pagePath: 'pages/template/index', text: '模板' },
      { pagePath: 'pages/journals/index', text: '我的' }
    ]
  }
})
