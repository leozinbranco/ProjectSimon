// Update with your config settings.

module.exports = {
  

  development: {
    client: 'mssql',
    connection: {
      host : 'zwicky18.database.windows.net',
      user : 'adm',
      password : 'Cotuca@Senha',
      database : 'andromeda'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
    
  },
  /*
  staging: {
    client: 'mssql',
    connection: {
      host : 'zwicky18.database.windows.net',
      user : 'adm',
      password : 'Cotuca@Senha',
      database : 'andromeda'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },
  

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


 
  
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  */
};
