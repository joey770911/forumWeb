var express = require('express');
var router = express.Router();
var conn = require('../routes/mysql_conn');



/* GET users listing. */
router.get('/', function(req, res) {
	var sql = "SELECT * FROM tb_member";
	conn.query(sql,function(err, rows, fields) {
		console.dir(err);
		console.dir(rows);
	});
	res.send('a');
});

router.ChkAccount = function(req, res){
	res.send('aaa');
}

module.exports = router;