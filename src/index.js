module.exports = {
  register () {
    this.routes = [
      {
        path: '/mainnet-explorer',
        name: 'mainnet-explorer',
        component: 'MainnetExplorer'
      },
      {
        path: '/devnet-explorer',
        name: 'devnet-explorer',
        component: 'DevnetExplorer'
      }
    ]

    this.menuItems = [
      {
        routeName: 'mainnet-explorer',
        title: 'Mainnet Explorer'
      },
      {
        routeName: 'devnet-explorer',
        title: 'Devnet Explorer'
      }
    ]
  },

  getComponentPaths () {
    return this.routes.reduce((all, route) => {
      return {
        ...all,
        [route.component]: `pages/${route.component}.js`
      }
    }, {})
  },

  getRoutes () {
    return this.routes
  },

  getMenuItems () {
    return this.menuItems
  },

  getUnprotectedIframeUrls () {
    return []
  }
}
