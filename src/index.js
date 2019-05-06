module.exports = {
  register () {
    this.routes = [
      {
        path: '/explorer',
        name: 'explorer',
        component: 'Explorer'
      }
    ]

    this.menuItems = [
      {
        routeName: 'explorer',
        title: 'Explorer'
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
