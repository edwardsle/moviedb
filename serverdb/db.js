const pg = require('pg');

//database config
const db = new pg.Pool({
    user: 'postgres',
    password: 'Quyen137',
    database: 'moviedb',
    port: 5432,
    host: 'localhost'
})

module.exports = db;