import { get } from './get'

export function getNewsData(count) {
    const result = get('/api/homeNews/'+count)
    return result
}


//获取新闻列表
export function getNewsListData() {
    const result = get('/api/newsList')
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


