import { SERVER_PATH } from '../config/constant/commonConstant'
import { get , get_params} from './get'

export function getNewsData(count) {
    const result = get('/api/homeNews/'+count)
    return result
}


//获取新闻列表
export function getNewsListData() {
    const result = get('/api/newsList')
    return result
}

//获取新闻列表
export function getTestData() {
    const result = get('/api/test')
    return result
}


//获取新闻详情
export function getNewsDetailsData(id) {
    const result = get('/api/newsDetails/' + id)
    return result
}



//获取分会介绍详情
export function getBranchInfoData(id) {
    const result = get('/api/branchIntro/' + id)
    return result
}



/* 新添加的  所有通过Tomcat获取数据的接口 */


//通过首页类型获取所有首页的数据
export function getHomeDateByType(startPage,pageSize,type,serverType){
    const params = {
        pageNum:startPage,
        pageSize:pageSize,
        type:serverType,
    }
    let url = '' //请求后台路由，根据type决定
    let resultData = '' //服务端请求结果
    switch (type) {
        case 'HotNotice':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'PredictionActivity':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'PicNews':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'academicExchange':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'recognitionAward':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'Review':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'skillShow':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'patent':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        case 'product':
            url = SERVER_PATH +'allInfo/getInfoList';
            resultData = get_params(url,params);
            break;
        default:
            break;
    }

    return resultData;
}







