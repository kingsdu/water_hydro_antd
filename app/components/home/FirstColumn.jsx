import React, {Component} from 'react'
import {Row, Col} from 'antd'

import NoticeColumn from './NoticeColumn'
import MemberService from './MemberService'

const FirstColumn = ()=> {
    return (
        <div>
            <Row>
                <Col span={16}>
                    <NoticeColumn
                    id='notice'
                    title='公会动态'
                    type='in_notices'
                    iconType='2'
                    isMore={true}>                    
                    </NoticeColumn>
                </Col>
                <Col span={6} offset={1}>
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