import { get } from './get'

export function getNewsData() {
    const result = get('/api/homeNews')
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





