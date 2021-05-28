const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS,
  database : process.env.MYSQL_DB
});

connection.connect( error => {
    if (error) throw error
    console.log(`A connection has been established to ${process.env.MYSQL_DB} at ${process.env.MYSQL_HOST}`)
});

module.exports = connection