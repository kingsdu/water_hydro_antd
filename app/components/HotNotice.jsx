import React, {Component} from 'react'
import {Row, Col, Carousel} from 'antd'

import ColumnHeader from '../components/ColumnHeader'
import NewsListBlock from '../components/NewsListBlock'

export default class HotNotice extends Component{
    render(){
        const {isMore, isCenter, title, id} = this.props;
        return(
            <div>
                <ColumnHeader
                title={title}
                id={id}
                isMore={isMore}
                isCenter={isCenter}/>
                <NewsListBlock type='guonei'count={5} isCenter={true}/> 
            </div>
        )
    }
}

