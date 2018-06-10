import React, {Component} from 'react'
import {Row, Col, Tabs} from 'antd'

import NoticeColumn from './Notice/NoticeColumn'

const SecondColumn = ()=> {
    return (
        <div>
            <Row gutter={6}>
                <Col span={7} offset={1}>
                    <NoticeColumn
                    id='notice'
                    title='通知公告'
                    type='in_notices'
                    isMore={true}>                    
                    </NoticeColumn>
                </Col>
                <Col span={7} offset={1}>
                    <NoticeColumn
                    id='notice'
                    title='通知公告'
                    type='in_notices'
                    isMore={true}>                    
                    </NoticeColumn>
                </Col>
            </Row>
        </div>
    )
}

export default SecondColumn