
//根据传入的module获取菜单名称
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

