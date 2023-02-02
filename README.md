<a href="https://codeclimate.com/github/onebeyond/systemic-knex/maintainability"><img src="https://api.codeclimate.com/v1/badges/4b69d0b8a26990aae802/maintainability" /></a>
<a href="https://codeclimate.com/github/onebeyond/systemic-knex/test_coverage"><img src="https://api.codeclimate.com/v1/badges/4b69d0b8a26990aae802/test_coverage" /></a>

<p align="center"><h1 align="center">
  systemic-knex
</h1>

<p align="center">
  A systemic Knex component
</p>


## ☕️ Usage
```js
const System = require('systemic')
const knex = require('@onebeyond/systemic-knex')

new System()
    .configure({
        knex: {
            // @SEE: http://knexjs.org/#Installation-client
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'password',
                database: 'database_name'
            },
            // Optional Config (pool, migrations, seeds...):
            pool: {},
            migrations: {
                tableName: 'knex_migrations',
                directory: join(__dirname, '..', '/db/migrations')
            },
            seeds: {
                directory: join(__dirname, '..', '/db/seeds')
            }
        }
    })
    .add('logger', console)
    .add('knex', knex()).dependsOn('config')
    .start((err, components) => {
        // Do stuff with components.knex
    })
```

### 🚩 Compatibility versions

| Version   |      Node.js      |  Knex |
|----------|:-------------:|------:|
| knex-systemic@1.0.0 | 10.x-14.x | 0.21.17 |
| knex-systemic@2.0.0 | 14.x-19.x | 0.21.17 |
| @onebeyond/knex-systemic@1.0.0 | 14.x-19.x | 0.21.17 |
| @onebeyond/knex-systemic@1.0.1 | 14.x-19.x | 0.21.17 |
| @onebeyond/knex-systemic@1.0.2 | 14.x-19.x | 0.21.18 |
| @onebeyond/knex-systemic@1.0.3 | 14.x-19.x | 0.21.19 |
| @onebeyond/knex-systemic@1.0.4 | 14.x-19.x | 0.21.21 |

### 📚 Parameters
Check out [the official documentation](http://knexjs.org/#Installation-client)
