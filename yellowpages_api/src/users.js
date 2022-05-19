const moment = require('moment')

const initUsers = async (server) => { 
    

    server.route({
        path: '/users',
        method: 'POST',
        options: { cors: true },
        handler: async (req, h) => { 
          const { payload } = req    

          const contacts = require('./../data/contacts.json')

          const searchableParams = [
            'name',
            'phone_number',
            'age'
          ] 

          const parseUser = user => {
              return {
                  ...user,
                  age:`${ moment(new Date(user.birthday.split(' ')[0]).getTime()).fromNow() }`.replace('years ago', '')
              }
          } 
          const cleanParam = param => {
            return param.replace(/\(|\)|\ /g, '')
          } 
          
          const filterUser = user => { 
            const expressions = payload.searchExpression.split(' ').filter(fit => fit)
            const findableParams = Object.keys(user).filter(param => searchableParams.includes(param)) 
            return ( !payload.searchExpression || 
                expressions.filter(expression =>
                    findableParams.filter(k => verifyParam(user[k], expression) ).length > 0
                ).length === expressions.length 
            )
          } 
          const verifyParam = (param, expression) => {  
            return `${ cleanParam(param) }`.toLowerCase().indexOf(cleanParam(expression).toLowerCase()) !== -1
          } 
          
          return contacts.map(parseUser).filter(filterUser)
        }
    })

    server.route({
        path: '/users',
        method: 'GET',
        options: { cors: true },
        handler: async (req, h) => {   
          return require('./../data/contacts.json')
        }
    })
  
  }  
  
  module.exports = {
    initUsers
  }