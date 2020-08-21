const config = require('config')
const mysql = require('mysql')

const database = mysql.createConnection({
  host: config.get('database.host'),
  database: config.get('database.database'),
  user: config.get('database.user'),
  prot: config.get('database.port'),
})

database.connect((error) => {
  if (error) return console.error(error)

  console.log('Connected')
})

module.exports = database
