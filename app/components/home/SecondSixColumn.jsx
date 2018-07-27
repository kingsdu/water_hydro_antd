import React, {Component} from 'react'

import {Row, Col} from 'antd'
import SliderPic from './SliderPic'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import PicContent from '../home/PicContent'

const SecondSixColumn = () =>{
    return(
        <div>
            <Row>
                <Col span={10}>
                    <ColumnHeader
                    title={'学术会议'}
                    type='academicExchange'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                     type='academicConference'
                     serverType='1'/>
                    <NewsListBlock haveLine={true} type='academicConference' serverType='1'/> 
                </Col>
                <Col span={10} offset={3}>
                    <ColumnHeader
                    title={'表彰奖励'}
                    type='rewardDynamics'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                    type='rewardDynamics'
                    serverType='1'/>
                    <NewsListBlock haveLine={true} type='rewardDynamics'  serverType='1'/> 
                </Col>
            </Row>
        </div>
    )
}

export default SecondSixColumn