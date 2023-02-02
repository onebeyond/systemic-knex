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
| @onebeyond/knex-systemic@1.1.0 | 14.x-19.x | 0.95.10 |
| @onebeyond/knex-systemic@1.1.1 | 14.x-19.x | 0.95.11 |
| @onebeyond/knex-systemic@1.1.2 | 14.x-19.x | 0.95.12 |
| @onebeyond/knex-systemic@1.1.3 | 14.x-19.x | 0.95.13 |
| @onebeyond/knex-systemic@1.1.4 | 14.x-19.x | 0.95.14 |
| @onebeyond/knex-systemic@1.1.5 | 14.x-19.x | 0.95.15 |
| @onebeyond/knex-systemic@2.0.0 | 14.x-19.x | 1.0.0 |
| @onebeyond/knex-systemic@2.0.1 | 14.x-19.x | 1.0.1 |
| @onebeyond/knex-systemic@2.0.2 | 14.x-19.x | 1.0.2 |
| @onebeyond/knex-systemic@2.0.3 | 14.x-19.x | 1.0.3 |
| @onebeyond/knex-systemic@2.0.4 | 14.x-19.x | 1.0.4 |
| @onebeyond/knex-systemic@2.0.5 | 14.x-19.x | 1.0.5 |
| @onebeyond/knex-systemic@2.0.6 | 14.x-19.x | 1.0.6 |
| @onebeyond/knex-systemic@2.0.7 | 14.x-19.x | 1.0.7 |
| @onebeyond/knex-systemic@3.0.0 | 14.x-19.x | 2.0.0 |
| @onebeyond/knex-systemic@3.1.0 | 14.x-19.x | 2.1.0 |
| @onebeyond/knex-systemic@3.2.0 | 14.x-19.x | 2.2.0 |

### 📚 Parameters
Check out [the official documentation](http://knexjs.org/#Installation-client)
