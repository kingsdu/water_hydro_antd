import React, {Component} from 'react'
import {Row, Col, Carousel} from 'antd'

import NoticeColumn from '../Notice/NoticeColumn'
import MemberService from '../MemberService/MemberService'

const FirstColumn = ()=> {
    return (
        <div>
            <Row>
                <Col span={16}>
                    <NoticeColumn
                    id='notice'
                    title='公会动态'
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