import React, {Component} from 'react'

import {Row, Col} from 'antd'
import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import ScienceDomain from './ScienceDomain'
import Certification from './Certification'

const SecondEightColumn = () => {
    return(
        <div className='SecondEightColumn'>
            <Row>
                <Col span={7}>
                    <ColumnHeader
                        title={'专利'}
                        id={'1'}
                        isMore={true}
                        isCenter={false}/>
                        <NewsListBlock haveLine={true} count={6}/> 
                </Col>
                <Col span={7} offset={1}>
                    <ColumnHeader
                        title='科普乐园'
                        isMore={true}
                        isCenter={false}/>
                    <ScienceDomain/>             
                </Col>
                <Col span={7} offset={1}>
                    <Certification
                        title='资质认证'
                        isMore={true}
                        isCenter={false}/>    
                </Col>
            </Row>
        </div>
    )
}

export default SecondEightColumn