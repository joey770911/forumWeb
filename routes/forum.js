var express = require('express');
var router = express.Router();
var conn = require('../routes/mysql_conn');

/* GET users listing. */
router.get('/', function(req, res) {
	/*var sql = "SELECT * FROM tb_member";
	conn.query(sql,function(err, rows, fields) {
		
	});*/
	res.render('forum', {title:'聊天室',str:req.session.pid});
});


router.getMsg = function(req, res){
	var sql = "SELECT * FROM tb_member";
	conn.query(sql,function(err, rows, fields) {
		res.send(rows);
	});
}


router.postMsg = function(req, res){
	var sql = "SELECT * FROM tb_member";
	conn.query(sql,function(err, rows, fields) {
		res.send(rows);
	});
}

module.exports = router;