module.exports = {
  register () {
    this.routes = [
      {
        path: '/ark-explorer',
        name: 'ark-explorer',
        component: 'Explorer'
      }
    ]

    this.menuItems = [
      {
        routeName: 'ark-explorer',
        title: 'ARK Explorer'
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
  }
}
