import {getBranchInfoData} from '../common/fetch'

export function getContentByModule(module){
    let content = ''
    let id = ''
    switch (module) {
        // case 'brachInfo' : id = '1'
        // break;
        // case 'organization' : id = '2'
        // break;
        case 'brachInfo' : content = getBranchInfoData(id='1')
        break;
        case 'organization' : content = getBranchInfoData(id='2')
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


