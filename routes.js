'use strict'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return "<h1>Hello HapiJs</h1>"
    }
  }
]

module.exports = routes