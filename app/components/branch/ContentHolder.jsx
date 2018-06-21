import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule } from '../../common/getContentByModule'
import { switchNameByModule } from '../../common/getColumnName'

//获取内容部分数据
const ContentHolder = ({params}) => {
    const data = getContentByModule(params.module)
    data.then(res => {
        return res.json()
    }).then(json => {
        console.log("data",json)
    })
    return(
        <div className='ContentHolder'>
            <ContentText contentData={data}/>
        </div>
    )

}






export default ContentHolder