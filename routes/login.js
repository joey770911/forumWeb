var express = require('express');
var router = express.Router();
var conn = require('../routes/mysql_conn');
var md5 = require('MD5');


/* GET users listing. */
router.get('/', function(req, res) {
	res.render('login', { title: 'login page' });
});



router.ChkAccount = function(req, res) {
	var account = req.param('account');
	var password = md5(req.param('password'));
	var sql = "SELECT * FROM tb_member WHERE account = ? AND password = ?";
	

	conn.query(sql,[account,password],function(err, rows, fields) {
		if(err) {
			res.send("資料庫連線錯誤");
		} 

		
		console.dir(rows);
		console.dir(rows.length);
		
	});
}

module.exports = router;