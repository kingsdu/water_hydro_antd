import React, {Component} from 'react'

import {Row, Col} from 'antd'
import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'

import NoticeColumn from '../../components/home/NoticeColumn'
import MemberService from '../../components/home/MemberService'

const SecondFiveColumn = () =>{
    return(
        <div>
            <Row className='row-bottom'>
                <Col span={24}>
                    <NoticeColumn
                        id='notice'
                        title='图片新闻'
                        type='in_notices'
                        iconType='2'
                        isMore={true}>                    
                    </NoticeColumn>
                </Col>
            </Row>
           
        </div>
    )
}

export default SecondFiveColumn