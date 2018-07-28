import React, {Component} from 'react'

import {Row, Col} from 'antd'
import SliderPic from './SliderPic'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import PicContent from '../home/PicContent'

const SecondSixColumn = () =>{
    return(
        <Row>
            <Col span={11}>
                <ColumnHeader
                title={'学术会议'}
                type='academicExchange'
                isMore={true}
                isCenter={false}/>
                <PicContent
                    type='academicConference'
                    serverType='1'/>
                <NewsListBlock haveLine={true} type='academicConference' serverType='1' count='5'/> 
            </Col>
            <Col span={11} offset={2}>
                <ColumnHeader
                title={'表彰奖励'}
                type='rewardDynamics'
                isMore={true}
                isCenter={false}/>
                <PicContent
                type='rewardDynamics'
                serverType='1'/>
                <NewsListBlock haveLine={true} type='rewardDynamics'  serverType='1' count='5'/> 
            </Col>
        </Row>
    )
}

export default SecondSixColumn