import React, {Component} from 'react'
import ColumnHeader from '../ColumnHeader'
import {Row, Col, Carousel} from 'antd'

import NewsListBlock from '../NewsListBlock'

export default class NoticeColumn extends Component {
    render(){
        const {type, isMore, total, title, id} = this.props;
        return(
            <div>
                <ColumnHeader
                 title={title}
                 id={id}
                 isMore={isMore}/>
                <Row>
                    <Col span={12}>
                         <div className='border carousel'>
                            <Carousel autoplay>
                                <div><img src="http://i2.bvimg.com/622218/afdf320e83826001.jpg"/></div>
                                <div><img src="http://i2.bvimg.com/622218/390c5516e1e9edbf.jpg"/></div>
                                <div><img src="http://i2.bvimg.com/622218/fd93bb7f719da0f2.jpg"/></div>
                            </Carousel>                
                        </div>
                    </Col>
                    <Col span={12}>
                        <NewsListBlock type='guonei'count={5}/>   
                    </Col>
                </Row>               
            </div>
        )
    }
}