'use strict'

const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const server = Hapi.server({
    port: 8000,
    host: 'localhost'
})

server.route(routes)

server.ext('onRequest', function (request, h) {
    // console.log('onRequest');
    return h.continue
})
server.ext('onPreAuth', function (request, h) {
    // console.log('onPreAuth');
    return h.continue
})
server.ext('onCredentials', function (request, h) {
    // console.log('onCredentials');
    return h.continue
})
server.ext('onPostAuth', function (request, h) {
    // console.log('onPostAuth');
    return h.continue
})
server.ext('onPreHandler', function (request, h) {
    // console.log('onPreHandler');
    return h.continue
})
server.ext('onPostHandler', function (request, h) {
    // console.log('onPostHandler');
    return h.continue
})
server.ext('onPreResponse', function (request, h) {
    // console.log('onPreResponse');
    return h.continue
})

module.exports = server