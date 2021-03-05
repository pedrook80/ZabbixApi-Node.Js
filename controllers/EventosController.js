const knex = require('../database')
const api = require('../zabbix')

api.main()

module.exports={
   async index(req, res){ 
    const results = await knex('eventos')
    return res.json(results)
    }
}