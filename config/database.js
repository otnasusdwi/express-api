let mysql = require('mysql2');

let connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'blink182',
   database: 'db_express_api'
});

connection.connect(function (error) {
   if (!!error) {
      console.log(error);
   } else {
      console.log('Connection Succuessfully!');
   }
})

module.exports = connection;