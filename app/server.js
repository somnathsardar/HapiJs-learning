'use strict'

const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const server = Hapi.server({
    port: 8000,
    host: 'localhost'
});

server.route(routes);

module.exports = server