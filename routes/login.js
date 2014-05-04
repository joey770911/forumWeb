var express = require('express');
var router = express.Router();
var conn = require('../routes/mysql_conn');
var md5 = require('MD5');


/* GET users listing. */
router.get('/', function(req, res) {
	res.send('a');
});

router.ChkAccount = function(req, res){
	res.send(md5('1713'));
}

module.exports = router;