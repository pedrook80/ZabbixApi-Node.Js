const Zabbix = require('zabbix-promise')
const knex = require('./database')

const zabbix = new Zabbix({
  url: 'http://192.168.1.90/api_jsonrpc.php',
  user: 'Admin',
  password: 'zabbix'
})


module.exports={
  async main() {
    try {
      await zabbix.login()
      const host = await zabbix.request('host.get', {
        selectInterfaces:'extend',  
        filter: {
            host:"Teste"}
      })
      for (var i in host) {
        hosts = host[i]["hostid"];
        
      
      const event = await zabbix.request('event.get', {
        output: "extend", 
        hostids:hosts
      })
      for (var i in event) {
        eventsName = event[i]['name'];
        eventsClock = event[i]['clock'];
        eventsSeverity = event[i]['severity'];
      
        const db = [
            { hostid: hosts, clock: eventsClock, name: eventsName, severity: eventsSeverity }
          ]
          
          knex('eventos').insert(db).then(() => console.log("Dado Inserido"))
             .catch((err) => { console.log(err); throw err })
          
         }     
      }

    zabbix.logout()
    } catch (error) {
    console.error(error)
    }
  }
}
