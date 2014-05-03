var configJson = require('../db_config.json');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: configJson.dbhost,
	database: configJson.dbname,
	user: configJson.dbusername,
	password: configJson.dbpassword
});
connection.connect();

exports.query = connection.query.bind(connection);