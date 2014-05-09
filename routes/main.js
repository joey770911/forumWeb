var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.dir(res.session);
	res.render('main', {title:'首頁'});
});


module.exports = router;