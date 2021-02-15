# systemic-knex
A systemic Knex component

## Usage
```js
const System = require('systemic')
const knex = require('systemic-knex')

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

### Parameters


Check out [the official documentation](http://knexjs.org/#Installation-client)
