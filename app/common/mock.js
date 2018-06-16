var app = require('koa')();
var router = require('koa-router')();

//首页新闻展示
var newsData = require('./home/news.js')
router.get('/api/homeNews', function *(next) {
    this.body = newsData
})



//新闻列表数据
var newsList = require('./home/newsList.js')
router.get('/api/newsList', function *(next) {
    this.body = newsList;
})



//获取新闻详情信息
var newsDetails = require('./home/newsDetails.js')
router.get('/api/newsDetails/:id', function *(next) {
    const params = this.params
    const id = params.id

    const resData = newsDetails.filter(function(item){
        if(item.id == id){
            return item
        }
    })

    this.body = resData;
})



// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3001);