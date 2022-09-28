var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carrental',
});

connection.connect(function (error){
  if (!!error) {
    console.log(error);
  } else {
    console.log('MYSQL Databse is Running Connected');
  }
});

module.exports = connection;