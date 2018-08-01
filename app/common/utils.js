import { SERVER_PATH } from '../config/constant/commonConstant'
import { get , get_params} from './get'
import { post} from './post'

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
        case 'academicConference':
            route = '/child/academic/academicConference'
            break;
        case 'rewardDynamics':
            route = '/child/award/rewardDynamics'
            break;
        case 'technicalDynamics':
            route = '/child/dynamic/technicalDynamics'
            break;
        case 'sciencePropaganda':
            route = '/child/SciencePark/sciencePropaganda'
            break;
        case 'memberInformation':
            route = '/child/membershipService/memberInformation'
            break;
        case 'scientificJournal':
            route = '/child/SciencePark/scientificJournal'
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
    }else if(category == 'dynamic'){
        title = '分会动态'
        switch(module){
            case 'announcement' : subTitle="通知公告"
            break;
            case 'news' : subTitle="学会新闻"
            break;
            case 'technicalDynamics' : subTitle="技术动态"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'academic'){
        title = '学术交流'
        switch(module){
            case 'meetingAnnouncement' : subTitle="会议通知"
            break;
            case 'academicConference' : subTitle="学会会议"
            break;
            case 'callForPapers' : subTitle="征文通知"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'SciencePark'){
        title = '科普园地'
        switch(module){
            case 'sciencePropaganda' : subTitle="科普宣传"
            break;
            case 'scientificKnowledge' : subTitle="科普知识"
            break;
            case 'scientificJournal' : subTitle="学会期刊"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'membershipService'){
        title = '会员服务'
        switch(module){
            case 'incorporationProcess' : subTitle="入会流程"
            break;
            case 'rightsAndObligations' : subTitle="权利义务"
            break;
            case 'memberInformation' : subTitle="会员风采"
            break;
            case 'applicationForMembership' : subTitle="入会申请"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'award'){
        title = '表彰奖励'
        switch(module){
            case 'rewardDynamics' : subTitle="奖励动态"
            break;
            case 'awardsIntroduced' : subTitle="奖项介绍"
            break;
            case 'AwardApplication' : subTitle="奖项申报"
            break;
            case 'Sponsors' : subTitle="赞助单位"
            break;
            default: subTitle = ""
            break;
        }
    }else if(category == 'digitalData'){
        title = '数字资料'
        switch(module){
            case 'annualMeeting' : subTitle="学术年会"
            break;
            case 'digitalConference' : subTitle="学术会议"
            break;
            case 'commemorativeEvent' : subTitle="纪念活动"
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
        /* 分会动态 */
        //通知公告
        case 'announcement' : 
        route = 'BranchDynamic/getBranchCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        //分会新闻
        case 'news' : 
        route = 'BranchDynamic/getBranchCount';
        serverType = '2'
        content = getCount(route,serverType);
        break;
        //技术动态
        case 'technicalDynamics' : 
        route = 'BranchDynamic/getBranchCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        /* 学术交流 */
        case 'meetingAnnouncement' : 
        route = 'Academic/getAcademicCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        case 'academicConference' : 
        route = 'Academic/getAcademicSelfCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        case 'callForPapers' : 
        route = 'Academic/getAcademicCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        /* 科普园地 */
         //科普宣传
         case 'sciencePropaganda' : 
         route = 'SciencePark/getScienceCount';
         serverType = '1'
         content = getCount(route,serverType);
         break;
         //科普知识
         case 'scientificKnowledge' : 
         route = 'SciencePark/getScienceCount';
         serverType = '2'
         content = getCount(route,serverType);
         break;
        //学会期刊
        case 'scientificJournal' : 
        route = 'SciencePark/getScienceCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
        /* 会员专区 */
        //会员风采
        case 'memberInformation' : 
        route = 'member/getPassedMembersCount';
        serverType = '2'
        content = getCount(route,serverType);
        break;
        //入会申请
        case 'applicationForMembership' : 
        route = 'allInfo/getInfoCount';
        serverType = '6'
        content = getCount(route,serverType);
        break;
        /* 表彰奖励 */
        //奖励动态
        case 'rewardDynamics' : 
        route = 'AwardInfos/getAwardCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        //奖项介绍
        case 'awardsIntroduced' : 
        route = 'AwardInfos/getAwardCount';
        serverType = '2'
        content = getCount(route,serverType);
        break;
        //奖项申报
        case 'AwardApplication' : 
        route = '';
        serverType = '6'
        content = getCount(route,serverType);
        break;
        //赞助单位
        case 'Sponsors' : 
        route = 'AwardInfos/getAwardSponsorCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        /* 数字资料 */
        //学术年会
        case 'annualMeeting' : 
        route = 'digital/getDataActivityCount';
        serverType = '1'
        content = getCount(route,serverType);
        break;
        //学术会议
        case 'digitalConference' : 
        route = 'digital/getDataActivityCount';
        serverType = '2'
        content = getCount(route,serverType);
        break;
        //纪念活动
        case 'commemorativeEvent' : 
        route = 'digital/getDataActivityCount';
        serverType = '3'
        content = getCount(route,serverType);
        break;
    }
    return content
}


//数字资料模块
export function getDigtalAllCount(id,type){
    const route = 'digital/getDataActivityCount';
    const content = getDigtalCount(route,id,type);
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
        route = 'branchIntro/getBranchByType';
        content = getDataByType(route,1);
        break;
        //组织结构
        case 'organization' : 
        route = 'branchIntro/getBranchByType';
        content = getDataByType(route,2);
        break;
        //分会章程
        case 'regulation' : 
        route = 'branchIntro/getBranchByType';
        content = getDataByType(route,3);
        break;
        //大事记
        case 'event' : 
        route = 'branchIntro/getBranchByType';
        content = getDataByType(route,4);
        break;
        //相关文件
        case 'documents' : 
        route = 'branchIntro/getBranchByType';
        content = getDataByType(route,5);
        break;
        /* 分会动态模块 */
        //通知公告
        case 'announcement' : 
        route = 'BranchDynamic/getBranchDynamicNewsByType';
        serverType = '1'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //学会新闻
        case 'news' : 
        route = 'BranchDynamic/getBranchDynamicNewsByType';
        serverType = '2'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //技术动态
        case 'technicalDynamics' : 
        route = 'BranchDynamic/getBranchDynamicNewsByType';
        serverType = '3'
        content = getNewsList(route,startPage,size,serverType);
        break;
        /* 学会交流 */
        //会议通知
        case 'meetingAnnouncement' : 
        route = 'Academic/getAcademicInfoByType';
        serverType = '1'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //学术会议
        case 'academicConference' : 
        route = 'Academic/getAcademicSelf';
        serverType = '1'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //征文通知
        case 'callForPapers' : 
        route = 'Academic/getAcademicInfoByType';
        serverType = '3'
        content = getNewsList(route,startPage,size,serverType);
        break;
        /* 科普园地 */
        //科普宣传
        case 'sciencePropaganda' : 
        route = 'SciencePark/getScienceParkInfoByType';
        serverType = '1'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //科普知识
        case 'scientificKnowledge' : 
        route = 'SciencePark/getScienceParkInfoByType';
        serverType = '2'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //学会期刊
        case 'scientificJournal' : 
        route = 'SciencePark/getScienceParkInfoByType';
        serverType = '3'
        content =getNewsList(route,startPage,size,serverType);
        break;
        /* 会员专区 */
        //入会流程
        case 'incorporationProcess' : 
        route = 'member/selectMPByType';
        serverType = '1'
        content = getDataByType(route,serverType);
        break;
        //权利与义务
        case 'rightsAndObligations' : 
        route = 'member/selectMOByType';
        serverType = '1'
        content = getDataByType(route,serverType);
        break;
        //会员风采
        case 'memberInformation' : 
        route = 'member/selectMemberShow';
        serverType = '2'
        content = getNewsList(route,startPage,size,serverType);
        break;
        /* 表彰奖励 */
        //奖励动态
        case 'rewardDynamics' : 
        route = 'AwardInfos/getAwardInfosByType';
        serverType = '1'
        content =getNewsList(route,startPage,size,serverType);
        break;
        //奖项介绍
        case 'awardsIntroduced' : 
        route = 'AwardInfos/getAwardInfosByType';
        serverType = '2'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //赞助单位
        case 'Sponsors' : 
        route = 'AwardInfos/getAwardSponsorList';
        serverType = ''
        content = getNewsList(route,startPage,size,serverType);
        break;
        /* 数字资料 */
        //学术年会
        case 'annualMeeting' : 
        route = 'digital/getDataActivityList';
        serverType = '1'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //学术会议
        case 'digitalConference' : 
        route = 'digital/getDataActivityList';
        serverType = '2'
        content = getNewsList(route,startPage,size,serverType);
        break;
        //纪念活动
        case 'commemorativeEvent' : 
        route = 'digital/getDataActivityList';
        serverType = '3'
        content = getNewsList(route,startPage,size,serverType);
        break;
    }
    return content;
}


//获取数字资料二层数据
export function getDigtialSecondData(id,type,startPage,size){
    const route = 'digital/getDigitalDataByTypeId';
    const params = {
        pageNum:startPage,
        pageSize:size,
        type:type,
        id:id,
    }    
    const data = get_params(SERVER_PATH+route,params)
    return data;
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



/**
 * 根据类型获取新闻
*/
export function getDataByType(route,type){
    const params = {
        type:type
    }

    const data = get_params(SERVER_PATH+route,params)
    return data;
}




//根据模块名称获取defaultSelectedKeys和defaultOpenKeys
export function getdefaultName(category){
    let defaultSelectedKeys = ''
    let defaultOpenKeys = ''
    switch (category) {
        //关于分会
        case 'brachInfo':
            defaultOpenKeys = 'branch'
            defaultSelectedKeys = '/child/branch/brachInfo'
            break;
        case 'organization':
            defaultOpenKeys = 'branch'
            defaultSelectedKeys = '/child/branch/organization'
            break;
        case 'regulation':
            defaultOpenKeys = 'branch'
            defaultSelectedKeys = '/child/branch/regulation'
            break;
        case 'event':
            defaultOpenKeys = 'branch'
            defaultSelectedKeys = '/child/branch/event'
            break;
        case 'documents':
            defaultOpenKeys = 'branch'
            defaultSelectedKeys = '/child/branch/documents'
            break;
        //分会动态
        case 'announcement':
            defaultOpenKeys = 'dynamic'
            defaultSelectedKeys = '/child/dynamic/announcement'
            break;
        case 'news':
            defaultOpenKeys = 'dynamic'
            defaultSelectedKeys = '/child/dynamic/news'
            break;
        case 'technicalDynamics':
            defaultOpenKeys = 'dynamic'
            defaultSelectedKeys = '/child/dynamic/technicalDynamics'
            break;
        //学术交流
        case 'meetingAnnouncement':
            defaultOpenKeys = 'academic'
            defaultSelectedKeys = '/child/academic/meetingAnnouncement'
            break;
        case 'academicConference':
            defaultOpenKeys = 'academic'
            defaultSelectedKeys = '/child/academic/academicConference'
            break;
        case 'callForPapers':
            defaultOpenKeys = 'academic'
            defaultSelectedKeys = '/child/academic/callForPapers'
            break;
        //科普园地
        case 'sciencePropaganda':
            defaultOpenKeys = 'SciencePark'
            defaultSelectedKeys = '/child/SciencePark/sciencePropaganda'
            break;
        case 'scientificKnowledge':
            defaultOpenKeys = 'SciencePark'
            defaultSelectedKeys = '/child/SciencePark/scientificKnowledge'
            break; 
        case 'scientificJournal':
            defaultOpenKeys = 'SciencePark'
            defaultSelectedKeys = '/child/SciencePark/scientificJournal'
            break; 
        //会员专区
        case 'incorporationProcess':
            defaultOpenKeys = 'membershipService'
            defaultSelectedKeys = '/child/membershipService/incorporationProcess'
            break;
        case 'rightsAndObligations':
            defaultOpenKeys = 'membershipService'
            defaultSelectedKeys = '/child/membershipService/rightsAndObligations'
            break;
        case 'memberInformation':
            defaultOpenKeys = 'membershipService'
            defaultSelectedKeys = '/child/membershipService/memberInformation'
            break;
        case 'applicationForMembership':
            defaultOpenKeys = 'membershipService'
            defaultSelectedKeys = '/child/membershipService/applicationForMembership'
            break;
        //表彰奖励
        case 'rewardDynamics':
            defaultOpenKeys = 'award'
            defaultSelectedKeys = '/child/award/rewardDynamics'
            break;
        case 'awardsIntroduced':
            defaultOpenKeys = 'award'
            defaultSelectedKeys = '/child/award/awardsIntroduced'
            break;
        case 'AwardApplication':
            defaultOpenKeys = 'award'
            defaultSelectedKeys = '/child/award/AwardApplication'
            break;
        case 'Sponsors':
            defaultOpenKeys = 'award'
            defaultSelectedKeys = '/child/award/Sponsors'
            break;
        //数字资料
        case 'annualMeeting':
            defaultOpenKeys = 'digitalData'
            defaultSelectedKeys = '/child/digitalData/digital1/annualMeeting'
            break;
        case 'digitalConference':
            defaultOpenKeys = 'digitalData'
            defaultSelectedKeys = '/child/digitalData/digital1/digitalConference'
            break;
        case 'commemorativeEvent':
            defaultOpenKeys = 'digitalData'
            defaultSelectedKeys = '/child/digitalData/digital1/commemorativeEvent'
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


//获取数字资料模块个数
export function getDigtalCount(route,id,type){
    const params = {
        id:id,
        type:type
    }    
    const data = get_params(SERVER_PATH+route,params)
    return data;
}



export function getChildItem(category){
    let resCategory = ''
    if(category === 'brachInfo' || category === 'organization' || category === 'regulation'
    || category === 'event' || category === 'documents'){
        resCategory = 'branch'
    }else if(category === 'announcement' || category === 'news' || category === 'technicalDynamics'){
        resCategory = 'dynamic'
    }else if(category === 'meetingAnnouncement' || category === 'academicConference' || category === 'callForPapers'){
        resCategory = 'academic'
    }else if(category === 'sciencePropaganda' || category === 'scientificKnowledge' || category === 'scientificJournal'){
        resCategory = 'SciencePark'
    }else if(category === 'incorporationProcess' || category === 'rightsAndObligations' || category === 'memberInformation'
    || category === 'applicationForMembership'){
        resCategory = 'membershipService'
    }else if(category === 'rewardDynamics' || category === 'awardsIntroduced' || category === 'AwardApplication'
    || category === 'Sponsors'){
        resCategory = 'award'
    }else if(category === 'annualMeeting' || category === 'digitalConference' || category === 'commemorativeEvent'){
        resCategory = 'digitalData'
    }
    return resCategory
}




export function getDetailRouteByCategory(category){
    let route = ''
    switch (category) {
        case 'dynamic':
        case 'eventsNotice':
        case 'dynamicNews':
        case 'technicalDynamics':
            route = 'BranchDynamic/getBranchDynamicById'
            break;
        case 'academic':
        case 'notices':
        case 'academicConference':
            route = 'Academic/getAcademicById'
            break;
        case 'SciencePark':
        case 'sciencePropaganda':
            route = 'SciencePark/getScienceParkInfoById'
            break;
        case 'SciencePark_Journal':
            route = 'SciencePark/getScienceJournalById'
            break;
        case 'award':
        case 'rewardDynamics':
            route = 'AwardInfos/getAwardInfosById'
            break;
        default:
            break;
    }
    return route;
}


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
        case 'eventsNotice':   //改成活动公告为能显示菜单栏
            url = SERVER_PATH +'BranchDynamic/getBranchDynamicNewsByType';
            resultData = get_params(url,params);
            break;
        case 'notices':
            url = SERVER_PATH +'Academic/getAcademicInfoByType';
            resultData = get_params(url,params);
            break;
        case 'picNews':
            url = SERVER_PATH +'BranchDynamic/getPicNews';
            resultData = get_params(url,params);
            break;
        case 'dynamicNews':
            url = SERVER_PATH +'BranchDynamic/getLastestPicNews';
            resultData = get_params(url,params);
            break;
        case 'academicConference':
            url = SERVER_PATH +'Academic/getAcademicPicNews';
            resultData = get_params(url,params);
            break;
        case 'rewardDynamics':
            url = SERVER_PATH +'AwardInfos/getAwardInfosByType';
            resultData = get_params(url,params);
            break;
        case 'technicalDynamics':
            url = SERVER_PATH +'BranchDynamic/getBranchDynamicNewsByType';
            resultData = get_params(url,params);
            break;
        case 'sciencePropaganda':
            url = SERVER_PATH +'SciencePark/getScienceParkInfoByType';
            resultData = get_params(url,params);
            break;
        case 'memberInformation':
        url = SERVER_PATH +'member/selectMemberShow';
        resultData = get_params(url,params);
            break;
        case 'scientificJournal':
        url = SERVER_PATH +'SciencePark/getScienceParkInfoByType';
        resultData = get_params(url,params);
            break;
        default:
            break;
    }

    return resultData;
}



//上传表单的方法,使用post

export function uploadForm(url,formData){
    // const params = {
    //     // account:account,
    //     // passwords:passwords
    //     formData:formData
    // }
    const data = post(url,formData);
    return data
}




/* 获取后台管理系统数据部分 */

//获取后台表格需要的数据
export function getBackDataByModule(startIndex,size,module){
    let route = ''
    let content = ''
    let serverType = ''
    switch (module) {
        case 'PendingMember':
        route = 'member/selectMemberShow'
        serverType = '1'
        content = getNewsList(route,startIndex,size,serverType);
            break;
        case 'PassedMember':
        route = 'member/selectMemberShow'
        serverType = '2'
        content = getNewsList(route,startIndex,size,serverType);
            break;
        case 'FailedMember':
        route = 'member/selectMemberShow'
        serverType = '3'
        content = getNewsList(route,startIndex,size,serverType);
            break;
        default:
            break;
    }
    return content;
}

// 获取后台数据条数
export function getBackCount(module){
    let route = ''
    let content = ''
    let  serverType = ''
    switch (module) {
        case 'PendingMember':
            route = 'member/getPassedMembersCount'
            serverType = '1'
            content = getCount(route,serverType);
        break;
        case 'PassedMember':
            route = 'member/getPassedMembersCount'
            serverType = '2'
            content = getCount(route,serverType);
        break;
        case 'FailedMember':
            route = 'member/getPassedMembersCount'
            serverType = '3'
            content = getCount(route,serverType);
            break;
        default:
            break;
    }
    return content;
}


//更新会员的状态
export function updateMemberState(account,state){
    const params = {
        type:type,
    }   
    const route = '' 
    axios.post(route, {
        account: account,
        state: state
      }).then(response => {
        if(res.data.Result === 'success'){
            this.props.form.resetFields()
        }
      }).catch(error => {
        console.log(error);
    });
    return data;
}