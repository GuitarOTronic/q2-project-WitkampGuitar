const path = require('path')
// module.exports = {
//
//   development: {
//     client: 'pg',
//     connection: 'postgresql://localhost:5432/Witkamp_Backend',
//     migrations: {
//       directory: path.join(__dirname, 'db', 'migrations')
//     },
//     seeds: {
//       directory: path.join(__dirname, 'db', 'seeds')
//     }
//
//   },
//   production: {
//     client: 'postgresql',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: path.join(__dirname, 'db', 'migrations')
//     },
//     seeds: {
//       directory: path.join(__dirname, 'db', 'seeds')
//     }
//   }
// };



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
  },

  client: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
