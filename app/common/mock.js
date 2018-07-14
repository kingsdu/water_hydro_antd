var app = require('koa')();
var router = require('koa-router')();

//首页新闻展示
var newsData = require('./home/news.js')
router.get('/api/homeNews/:count', function *(next) {
    const count = this.params.count
    let data = ''
    if(count == '4'){
        data = newsData.filter(function(item){
            if(item.id != '5' && item.id != '6'){
                return item
            }
        })
    }else if(count == '5'){
        data = newsData.filter(function(item){
            if(item.id != '6'){
                return item
            }
        })
    }else{
        data = newsData
    }
    this.body = data
})



//新闻列表数据
var newsList = require('./home/newsList.js')
router.get('/api/newsList', function *(next) {
    this.body = newsList;
})



//新闻测试json数据
var testList = require('./home/test.js')
router.get('/api/test', function *(next) {
    this.body = testList;
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

//获取新闻详情信息
var branchIntro = require('./home/branch_intro.js')
router.get('/api/branchIntro/:id', function *(next) {
    const params = this.params
    const id = params.id
    
    const resData = branchIntro.filter(function(item){
        if(item.id == id){
            return item
        }
    })
    
    this.body = resData;
})



// 开始服务并生成路由
// app.use(router.routes())
//    .use(router.allowedMethods());
// app.listen(3001);