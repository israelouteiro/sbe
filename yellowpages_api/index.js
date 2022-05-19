
const Hapi = require('@hapi/hapi');
const Inert = require('inert') 

const { initUsers } = require('./src/users');  

const server = Hapi.Server({ port: 8000 })

const init = async () => {

  await server.register(Inert)

  server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: { path: './build' }
        }
    })
 
  initUsers(server)

  await server.start()
  console.log('Running on port: 8000')
}

init()