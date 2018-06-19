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
                    id={'1'}
                    isMore={true}
                    isCenter={false}/>
                    <PicContent 
                    content={'中国要认真学习领会省水利局长会议精神'}
                    imageUrl={'http://i4.bvimg.com/622218/502285443975ff9f.jpg'}/>
                    <NewsListBlock haveLine={true}/> 
                </Col>
                <Col span={7} offset={1}>
                    <ColumnHeader
                    title={'表彰奖励'}
                    id={'1'}
                    isMore={true}
                    isCenter={false}/>
                    <PicContent 
                    content={'改进服务手段，提升服务质，增强'}
                    imageUrl={'http://i4.bvimg.com/622218/7b8541c58cef52f3.jpg'}/>
                    <NewsListBlock haveLine={true}/> 
                </Col>
                <Col span={7} offset={1}>
                    <ColumnHeader
                    title={'评审'}
                    id={'1'}
                    isMore={true}
                    isCenter={false}/>
                    <PicContent 
                    content={'基建局的指导和广大会员单位的大力'}
                    imageUrl={'http://i4.bvimg.com/622218/f4773f6423d7de0c.jpg'}/>
                    <NewsListBlock haveLine={true}/> 
                </Col>
            </Row>
        </div>
    )
}

export default SecondSixColumn