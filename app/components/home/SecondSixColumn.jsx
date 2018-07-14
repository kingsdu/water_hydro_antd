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
                <Col span={7}>
                    <ColumnHeader
                    title={'学术交流'}
                    type='academicExchange'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                     content={'为贯彻落实《深化标准化工作改革方案》'}
                     imageUrl={'http://i4.bvimg.com/622218/502285443975ff9f.jpg'}
                     type='dynamicsWork'
                     serverType='2'/>
                    <NewsListBlock haveLine={true} count={4} type='dynamicsWork' serverType='2'/> 
                </Col>
                <Col span={7} offset={1}>
                    <ColumnHeader
                    title={'表彰奖励'}
                    type='recognitionAward'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                    type='recognitionAward'
                    content={'改进服务手段，提升服务质，增强'}
                    imageUrl={'http://chuantu.biz/t6/337/1530426456x-1404817497.jpg'}
                    serverType='3'/>
                    <NewsListBlock haveLine={true} count={4} type='recognitionAward'  serverType='3'/> 
                </Col>
                <Col span={7} offset={1}>
                    <ColumnHeader
                    title={'评审'}
                    type='Review'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent 
                    type='Review'
                    content={'基建局的指导和广大会员单位的大力'}
                    imageUrl={'http://chuantu.biz/t6/339/1530841425x-1404817497.jpg'}
                    serverType='4'/>
                    <NewsListBlock haveLine={true} count={4} type='Review'  serverType='4'/> 
                </Col>
            </Row>
        </div>
    )
}

export default SecondSixColumn