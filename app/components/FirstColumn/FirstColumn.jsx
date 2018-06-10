import React, {Component} from 'react'
import {Row, Col, Carousel} from 'antd'

import NoticeColumn from '../Notice/NoticeColumn'
import MemberService from '../MemberService/MemberService'

const FirstColumn = ()=> {
    return (
        <div>
            <Row>
                <Col span={7}>
                    <div className='border carousel'>
                        <Carousel autoplay>
                            <div><img src="http://i2.bvimg.com/622218/afdf320e83826001.jpg"/></div>
                            <div><img src="http://i2.bvimg.com/622218/390c5516e1e9edbf.jpg"/></div>
                            <div><img src="http://i2.bvimg.com/622218/fd93bb7f719da0f2.jpg"/></div>
                        </Carousel>                     
                    </div>
                </Col>
                <Col span={8} offset={2}>
                    <NoticeColumn
                    id='notice'
                    title='通知公告'
                    type='in_notices'
                    isMore={true}>                    
                    </NoticeColumn>
                </Col>
                <Col span={4} offset={2}>
                    <MemberService 
                    id='notice'
                    title='会员服务'
                    type='in_notices'
                    isMore={true}>    
                    </MemberService>
                </Col>
            </Row>
        </div>
    )
}

export default FirstColumn