import React, {Component} from 'react'

import {Row, Col} from 'antd'
import VipShow from './VipShow'
import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import PicContent from '../home/PicContent'


const SecondSevenColumn = () => {
    return(
        <div className='SecondSevenColumn'>
            <Row>
                <Col span={10}>
                    <ColumnHeader
                    title={'技术动态'}
                    type='technicalDynamics'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                     type='technicalDynamics'
                     serverType='3'/>
                    <NewsListBlock haveLine={true} type='technicalDynamics' serverType='3'/> 
                </Col>
                <Col span={10} offset={3}>
                    <ColumnHeader
                    title={'科普宣传'}
                    type='sciencePropaganda'
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                    type='sciencePropaganda'
                    serverType='1'/>
                    <NewsListBlock haveLine={true} type='sciencePropaganda'  serverType='1'/> 
                </Col>
            </Row>
            <div>
                
            </div>
        </div>
    )
}
export default SecondSevenColumn