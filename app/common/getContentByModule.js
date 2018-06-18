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
        case 'regulation' : content = getBranchInfoData(id='1')
        break;
        case 'history' : content = getBranchInfoData(id='2')
        break;
        case 'event' : content = getBranchInfoData(id='2')
        break;
        case 'documents' : content = getBranchInfoData(id='2')
        break;
        default: id = ""
        break;
    }
    return content
}


export function getDataByID(id){
    const data =branchInfo.filter(function(item){
        if(item.id == id){
            return item
        }
    })
    return data
}




