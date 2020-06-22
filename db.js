var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'jairbedoya.com',
    user: 'root',
    password: '1997Emelec',
    database: 'classicmodels'
});
connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Base de datos conectada');
    }
});

module.exports = connection;