# ZabbixApi-Node.Js
Projeto que puxa dados do Zabbix os trata e coloca em uma banco de dados MySql utilizando Node.js e os frameworks Knex, Express e Zabbix-Promise

## Instalar dependencias 
Necessita ter o Node.Js instalado em sua maquina
```js
$ npm install
```

## Banco de dados
Utilizar Script do arquivo sql 'Banco de dados' e modificar o arquivo knexfile.js para conexão com seu banco! 


## Iniando o sistema

```js
$ node index.js
```
O sistema vai funcionar na seguinte URL:
http://localhost:3000/get
