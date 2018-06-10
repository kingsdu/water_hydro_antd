var app = require('koa')();
var router = require('koa-router')();

var newsData = require('./home/news.js')
router.get('/api/homeNews', function *(next) {
    console.log('News')

    this.body = newsData
})


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3001);