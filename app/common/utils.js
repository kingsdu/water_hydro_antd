import { SERVER_PATH } from '../config/constant/commonConstant'
import { get , get_params} from './get'


/**
 * 公共工具封装
*/


// 获取首页more所需要的route
export function getHomeTarget(type){
    let route = ''
    switch (type) {
        case 'BranchIntro':
            route = '/child/branch/brachInfo'
            break;
        case 'academicExchange':
            route = '/child/academic/dynamicsWork'
            break;
        case 'recognitionAward':
            route = '/child/award/rewardDynamics'
            break;
        case 'Review':
            route = '/child/certification/titlereview'
            break;
        case 'skillShow':
            route = '/child/SciencePark/scienceDynamics'
            break;
        case 'patent':
            route = '/child/SciencePark/publication'
            break;
        case 'product':
            route = '/child/SciencePark/publication'
            break;
        default:
            break;
    }

    return route
}



// 根据module 生成对应的菜单子栏目名称
export function switchNameByModule(category,module){
    let title = ''
    let subTitle = ''
    if(category == 'branch'){
        title = '关于分会'
        switch(module){
            case 'brachInfo' : subTitle="分会介绍"
            break;
            case 'organization' : subTitle="组织结构"
            break;
            case 'regulation' : subTitle="分会章程"
            break;
            case 'history' : subTitle="发展历程"
            break;
            case 'event' : subTitle="大事记"
            break;
            case 'documents' : subTitle="相关文件"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'academic'){
        title = '学术交流'
        switch(module){
            case 'dynamicsWork' : subTitle="工作动态"
            break;
            case 'eventsNotice' : subTitle="活动公告"
            break;
            case 'notices' : subTitle="通知"
            break;
            case 'skillDynamics' : subTitle="技术动态"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'award'){
        title = '表彰奖励'
        switch(module){
            case 'rewardDynamics' : subTitle="奖励动态"
            break;
            case 'rewardRecommendation' : subTitle="奖励推荐"
            break;
            case 'awardsIntroduced' : subTitle="奖项介绍"
            break;
            case 'YearendAwards' : subTitle="历年获奖情况"
            break;
            case 'Sponsors' : subTitle="赞助单位"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'certification'){
        title = '资质认证'
        switch(module){
            case 'titlereview' : subTitle="职称评审"
            break;
            case 'reviewRule' : subTitle="评审细则"
            break;
            case 'notices' : subTitle="职称申请"
            break;
            case 'skillDynamics' : subTitle="评审公告"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'SciencePark'){
        title = '科普园地'
        switch(module){
            case 'scienceDynamics' : subTitle="科普动态"
            break;
            case 'publication' : subTitle="出版刊物"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'membershipService'){
        title = '会员服务'
        switch(module){
            case 'titlereview' : subTitle="职称评审"
            break;
            case 'reviewRule' : subTitle="评审细则"
            break;
            case 'titleApplication' : subTitle="职称申请"
            break;
            case 'reviewNotice' : subTitle="评审公告"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'digitalData'){
        title = '数字资料'
        switch(module){
            case 'academicPapers' : subTitle="学术论文"
            break;
            case 'conference' : subTitle="会议活动"
            break;
            case 'powerPoint' : subTitle="PPT"
            break;
            case 'video' : subTitle="视频"
            break;
            case 'atlas' : subTitle="图集"
            break;
            default: subTitle = ""
            break;
        }
    }
    return title+"|"+subTitle
}


// 获取某一类新闻的总条数。只涉及有新闻列表页的内容
export function getInfoCount(module){
    let route = ''
    let serverType = ''
    let content = ''
    switch (module) {
        //工作动态
        case 'dynamicsWork' : 
        route = 'allInfo/getInfoCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        //活动公告
        case 'eventsNotice' : 
        route = 'allInfo/getInfoCount';
        serverType = '5'
        content = getCount(route,serverType);
        break;
        //通知
        case 'notices' : 
        route = 'allInfo/getInfoCount';
        serverType = '8'
        content = getCount(route,serverType);
        break;
        //技术动态
        case 'skillDynamics' : 
        route = 'allInfo/getInfoCount';
        serverType = '6'
        content = getCount(route,serverType);
        break;
        //奖励动态
        case 'rewardDynamics' : 
        route = 'news/getInfoCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        //奖励推荐
        case 'rewardRecommendation' : 
        route = 'news/getInfoCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        //奖励介绍
        case 'awardsIntroduced' : 
        route = 'news/getInfoCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        //历年获奖情况
        case 'YearendAwards' : 
        route = 'news/getInfoCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        //赞助单位
        case 'Sponsors' : 
        route = 'news/getInfoCount';
        serverType = '2'
        content = getCount(route,serverType);
        break;
        //职称评审
        case 'titlereview' : 
        route = 'news/getInfoCount';
        serverType = '4'
        content = getCount(route,serverType);
        break;
        //评审细则
        case 'reviewRule' : 
        route = 'news/getInfoCount';
        serverType = '4'
        content = getCount(route,serverType);
        break;
        //评审公告
        case 'reviewNotice' : 
        route = 'news/getInfoCount';
        serverType = '7'
        content = getCount(route,serverType);
        break;
        //科普动态
        case 'scienceDynamics' : 
        route = 'news/getInfoCount';
        serverType = '7'
        content = getCount(route,serverType);
        break;
        //出版刊物
        case 'publication' : 
        route = 'news/getInfoCount';
        serverType = '7'
        content = getCount(route,serverType);
        break;
        //评审公告
        case 'publication' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
    }
    return content
}


// 根据module 获取对应的内容列表
// startPage size 
export function getContentByModule(startPage,size,module){
    let content = ''
    let route = ''
    let serverType=''
    switch (module) {
        //关于分会
        case 'brachInfo' : 
        route = 'branchIntro/getInfoById';
        content = getDataByServerID(route,1);
        break;
        //组织结构
        case 'organization' : 
        route = 'branchIntro/getInfoById';
        content = getDataByServerID(route,2);
        break;
        //分会章程
        case 'regulation' : 
        route = 'branchIntro/getInfoById';
        content = getDataByServerID(route,3);
        break;
        //发展历程
        case 'history' : 
        route = 'branchIntro/getInfoById';
        content = getDataByServerID(route,4);
        break;
        //大事记
        case 'event' : 
        route = 'branchIntro/getInfoById';
        content = getDataByServerID(route,5);
        break;
        //相关文件
        case 'documents' : 
        route = 'branchIntro/getInfoById';
        content = getDataByServerID(route,6);
        break;
        //工作动态
        case 'dynamicsWork' : 
        route = 'allInfo/getInfoList';
        serverType = '1'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //活动公告
        case 'eventsNotice' : 
        route = 'allInfo/getInfoList';
        serverType = '5'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //通知
        case 'notices' : 
        route = 'allInfo/getInfoList';
        serverType = '8'
        content =getNewsList(route,startPage,size,serverType);
        break;
        //技术动态
        case 'skillDynamics' : 
        route = 'allInfo/getInfoList';
        serverType = '6'
        content =getNewsList(route,startPage,size,serverType);
        break;
        //奖励动态
        case 'rewardDynamics' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //奖励推荐
        case 'rewardRecommendation' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //奖励介绍
        case 'awardsIntroduced' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //历年获奖情况
        case 'YearendAwards' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //职称评审
        case 'titlereview' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //评审细则
        case 'reviewRule' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //
        case 'reviewNotice' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //
        case 'skillDynamics' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //科普动态
        case 'scienceDynamics' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
        //评审公告
        case 'publication' : 
        route = 'news/getTitleList';
        content = getNewsList(route,startPage,size);
        break;
    }
    return content;
}


//根据route、pageNum、pageSize获取新闻列表数据
export function getNewsList(route,pageNum,pageSize,serverType){
    const params = {
        pageNum:pageNum,
        pageSize:pageSize,
        type:serverType,
    }    
    const data = get_params(SERVER_PATH+route,params)
    return data;
}


// 根据id，获取指定新闻
export function getDataByServerID(route,id){
    const params = {
        id:id
    }
    
    const data = get_params(SERVER_PATH+route,params)
    return data;
}




//根据模块名称获取defaultSelectedKeys和defaultOpenKeys
export function getdefaultName(category){
    let defaultSelectedKeys = ''
    let defaultOpenKeys = ''
    switch (category) {
        case 'branch':
            defaultOpenKeys = 'branch'
            defaultSelectedKeys = '/child/branch/brachInfo'
            break;
        case 'academic':
            defaultOpenKeys = 'academic'
            defaultSelectedKeys = '/child/academic/dynamicsWork'
            break;
        case 'award':
            defaultOpenKeys = 'award'
            defaultSelectedKeys = '/child/award/rewardDynamics'
            break;
        case 'certification':
            defaultOpenKeys = 'certification'
            defaultSelectedKeys = '/child/certification/titlereview'
            break;
        case 'SciencePark':
            defaultOpenKeys = 'SciencePark'
            defaultSelectedKeys = '/child/SciencePark/scienceDynamics'
            break;
        case 'membershipService':
            defaultOpenKeys = 'membershipService'
            defaultSelectedKeys = '/child/membershipService/titlereview'
            break;
        case 'digitalData':
            defaultOpenKeys = 'digitalData'
            defaultSelectedKeys = '/child/digitalData/academicPapers'
            break;
        default:
            break;
    }
    return defaultOpenKeys+"|"+defaultSelectedKeys
}



//根据Module区分菜单详情到底是哪种布局
/**
 * 
 * @param module 
 * @return 有list类型和无list类型
 */
export function getMenuDetailByModule(module){
    let menuType = ''
    if(module == 'brachInfo' || module=='organization' || module=='regulation' 
    ||module=='history' || module=='event' || module=='documents'){
        menuType = 'NoList'
    }else if(testRegex(module)){
        menuType = 'Details'
    }else{
        menuType = 'List'
    }
    return menuType
}



// 检测id是否是数字
export function testRegex(id){
    const regex = new RegExp("^[0-9]*$")
    if(regex.test(id)){
        return true
    }else{
        return false
    }
    return false
}



export function getCount(route,type){
    const params = {
        type:type,
    }    
    const data = get_params(SERVER_PATH+route,params)
    return data;
}


