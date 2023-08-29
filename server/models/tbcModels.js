// client - 1 static connection to postgres server
// pool - dynamic num of clients with automatic reconnect functionality
// pool should be used for frequent or concurrent requests
const { Pool, Client } = require('pg');

const PG_URI =
  '';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {};
