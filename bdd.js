const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "muscuapp",
  password: "bouygues",
  port: "3000",
});

module.exports = pool;
