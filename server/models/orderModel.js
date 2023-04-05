const { Pool } = require('pg');

const PG_URI = 'postgres://gfypwpxx:laP599RMW3bcadopaogvx-nRJMCTqC_e@mahmud.db.elephantsql.com/gfypwpxx';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query:(text,params,callback) => {
    console.log('execute query', text);
    return pool.query(text, params, callback);
  }
};