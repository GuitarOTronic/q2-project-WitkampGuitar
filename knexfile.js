const path = require('path')
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/Witkamp_Backend',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }

  }

};
