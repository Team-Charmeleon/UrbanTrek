const { Pool } = require('pg');

const PG_URI =
  'postgres://rsusxegk:4hxYJ5PjyZ8itBx5qe-9Y2zlz8F359qt@otto.db.elephantsql.com/rsusxegk';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
