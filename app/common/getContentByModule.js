import {getBranchInfoData} from '../common/fetch'

import { branchInfo } from '../config/constant/branchInfo'

export function getContentByModule(module){
    let content = ''
    let id = ''
    switch (module) {
        case 'brachInfo' : content = getDataByID(id='1')
        break;
        case 'organization' : content = getDataByID(id='2')
        break;
        case 'regulation' : content = getDataByID(id='3')
        break;
        case 'history' : content = getBranchInfoData(id='2')
        break;
        case 'event' : content = getBranchInfoData(id='2')
        break;
        case 'dynamicsWork' : content = getBranchInfoData(id='2')
        break;
        case 'eventsNotice' : content = getBranchInfoData(id='2')
        break;
        case 'notices' : content = getBranchInfoData(id='2')
        break;
        case 'skillDynamics' : content = getBranchInfoData(id='2')
        break;
        case 'rewardDynamics' : content = getBranchInfoData(id='2')
        break;
        case 'rewardRecommendation' : content = getBranchInfoData(id='2')
        break;
        case 'awardsIntroduced' : content = getBranchInfoData(id='2')
        break;
        case 'YearendAwards' : content = getBranchInfoData(id='2')
        break;
        case 'titlereview' : content = getBranchInfoData(id='2')
        break;
        case 'reviewRule' : content = getBranchInfoData(id='2')
        break;
        case 'notices' : content = getBranchInfoData(id='2')
        break;
        case 'skillDynamics' : content = getBranchInfoData(id='2')
        break;
        case 'scienceDynamics' : content = getBranchInfoData(id='2')
        break;
        case 'publication' : content = getBranchInfoData(id='2')
        break;
        default: id = ""
        break;
    }
    return content
}


export function getDataByID(id){
    const data = branchInfo.filter(function(item){
        if(item.id == id){
            return item
        }
    })
    return data
}




