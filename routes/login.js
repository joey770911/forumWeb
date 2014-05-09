var express = require('express');
var router = express.Router();
var conn = require('../routes/mysql_conn');
var md5 = require('MD5');

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('login', { title: '登入頁面' });
});

//帳號密碼認證
router.AccountChk = function(req, res) {
	var account = req.param('account');
	var password = md5(req.param('password'));
	var sql = "SELECT * FROM tb_member WHERE account = ? AND password = ?";
	conn.query(sql,[account,password],function(err, rows, fields) {
		if(err) {
			res.send("資料庫連線錯誤");
		} 		
		if(rows.length) {
			console.dir(rows);
			req.session.memberAccount = rows.account;
			console.dir(req.session)
			res.render('main', { title: '服務平台' });
		} else {
			res.render('login', { title: '驗證帳號' ,msg:{code:100,text:"帳號密碼錯誤"}});
		}	
	});
}

module.exports = router;