//引用套件
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//引用套件

//宣告控制器
var login = require('./routes/login'); 
var forum = require('./routes/forum');
var main = require('./routes/main');
//控制器

//主程式物件宣告
var app = express();

// 設定伺服器參數
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'keyboardaacat', key: 'sid', cookie: { secure: false }}))
app.use(express.static(path.join(__dirname, 'public')));
// 設定伺服器參數

//URL路由導向
app.use('/login', login); //
app.post('/login/chk', login.AccountChk);
app.use('/main', main);
app.use('/forum', forum);
app.use('/forum/get', forum.getMsg);
//URL路由導向

///錯誤控制
app.all('*', function(req,res){
    if(req.session.Account == '')
        res.render('main', { title: '服務平台' });
    else 
        res.send("404 Not Found Page!!~");
});

/// 找不到網頁404錯誤
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
