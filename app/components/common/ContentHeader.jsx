import React from 'react'
import {Icon, Col, Row} from 'antd'
import { switchNameByModule } from '../../common/utils'


//新闻详情页面头部
const ContentHeader = ({category,module}) => {
    const title = switchNameByModule(category,module).split('|')
    return(
        <div className='ContentHeader'>
            <span className='span-left'>{title[1]}</span>
            <span className='span-right'>{title[0]}<Icon type="right" />{title[1]}</span>
        </div>
    )
}

export default ContentHeader