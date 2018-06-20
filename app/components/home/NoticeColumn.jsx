import React, {Component} from 'react'
import ColumnHeader from './ColumnHeader'
import {Row, Col, Carousel} from 'antd'

import NewsListBlock from '../common/NewsListBlock'
import FirstColumHeader from '../../components/common/FirstColumHead'
import NewsTitCon from '../../components/common/NewsTitCon'

export default class NoticeColumn extends Component {
    render(){
        const {isMore, title, id} = this.props;
        return(
            <div className ='NoticeColumn'>
                <Row>
                    <Col span={24}>
                        <FirstColumHeader params={'焦距动态'}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={10} className='Col-2'>
                        <img src='http://i2.bvimg.com/622218/390c5516e1e9edbf.jpg'/>            
                    </Col>
                    <Col span={13}>
                        <ColumnHeader
                            title={title}
                            id={id}
                            isMore={isMore}/>
                        <NewsTitCon/>
                    </Col>
                </Row>               
            </div>
        )
    }
}