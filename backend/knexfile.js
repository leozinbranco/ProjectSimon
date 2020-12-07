// Update with your config settings.
const env = require('dotenv').config()

module.exports = {
  

  development: {
    client: 'mssql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
    
  }
}