// client - 1 static connection to postgres server
// pool - dynamic num of clients with automatic reconnect functionality
// pool should be used for frequent or concurrent requests
const { Pool, Client } = require('pg');

const PG_URI =
  'postgres://hkmpbqfs:8i4GtSdtruFVspNKGoxp8lIyEpz_n9n-@berry.db.elephantsql.com/hkmpbqfs';

const pool = new Pool({
  connectionString: PG_URI,
});

// ADD SCHEMA IMG FOR FUTURE
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

/*
ADD NOTES FOR TABLES
 TABLES
 products
 JOIN TABLES
*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
