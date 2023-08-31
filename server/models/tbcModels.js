// client - 1 static connection to postgres server
// pool - dynamic num of clients with automatic reconnect functionality
// pool should be used for frequent or concurrent requests
const { Pool, Client } = require('pg');

const PG_URI =
  'postgres://qoixfkfr:CSk96yXWM2A-J3sTyQ_QWqfh2gCRcJDm@fanny.db.elephantsql.com/qoixfkfr';

const pool = new Pool({
  connectionString: PG_URI,
});

// TO DO - LINK SCHEMA IMG FOR FUTURE
// For now, Schema for the database can be found in TBC proj notebook:

/*
 TABLES
 products - foreign key - vendor_id 
 vendors - foreign key - not required - member_id 
 members
 orders - foreign keys - member_id, product_id 

 JOIN TABLES
 ordered_items - quantity ordered, ordered status, foreign keys - member_id, product_id
*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
