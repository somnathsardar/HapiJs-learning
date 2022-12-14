'use strict'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return "<h1>Hello HapiJs</h1>"
    }
  },
  /**
   * Path parameter
   * Example Uri: /path/10
   */
  {
    method: 'GET',
    path: '/path/{parameter}',
    handler: (request, h) => {
      const parameter = request.params.parameter
      return `<h1>Path parameter is: ${parameter}</h1>`
    },
  },
  /**
   * Optional path parameter
   * Example Uri: /optional/
   * Example Uri: /optional/test
   */
  {
    method: 'GET',
    path: '/optional/{parameter?}',
    handler: (request, h) => {
      const parameter = request.params.parameter ?? 'No path parameter'
      return `<h1>${parameter}</h1>`
    },
  },
  /**
   * Query parameter
   * Example Uri: /query/parameter?name=Somnath&surname=Sardar
   */
  {
    method: 'GET',
    path: '/query/parameter',
    handler: (request, h) => {
      const parameters = request.query
      return parameters
    },
  },
  /**
   * Request body payload
   * Example Uri: /request/payload
   */
  {
    method: 'POST',
    path: '/request/payload',
    handler: (request, h) => {
      const payload = request.payload
      return payload
    },
  },
  /**
   * Route for getting user location details.
   */
  {
    method: 'GET',
    path: '/location',
    handler: (request, h) => {
        const location = request.location
        return location
    },
    config: {
      plugins: {
        'hapi-geo-locate': {
          enabled: true,
          fakeIP: '8.8.8.8'
        }
      }
    },
  },
  /**
   * 404 handling
   */
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return '404 Error! Page Not Found!'
    },
  },
]

module.exports = routes