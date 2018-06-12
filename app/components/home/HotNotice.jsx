import React, {Component} from 'react'
import {Row, Col, Carousel} from 'antd'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'

export default class HotNotice extends Component{
    render(){
        const {isMore, isCenter, title, id, iconType} = this.props;
        return(
            <div>
                <ColumnHeader
                title={title}
                id={id}
                isMore={isMore}
                isCenter={isCenter}/>
                <NewsListBlock type='guonei'count={5} isCenter={true} iconType={iconType}/> 
            </div>
        )
    }
}

