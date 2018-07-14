import React, {Component} from 'react'
import {Row, Col} from 'antd'

import NoticeColumn from '../../components/home/NoticeColumn'
import MemberService from '../../components/home/MemberService'

const SecondFiveColumn = () =>{
    return(
        <div>
            <Row className='row-bottom'>
                <Col span={24}>
                    <NoticeColumn
                        title='图片新闻'
                        type='dynamicsWork'
                        serverType='1'
                        isCenter={false}
                        isMore={false}>                    
                    </NoticeColumn>
                </Col>
            </Row>
           
        </div>
    )
}

export default SecondFiveColumn