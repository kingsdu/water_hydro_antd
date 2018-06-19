import React, {Component} from 'react'
import {Row, Col} from 'antd'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import ScienceDomain from './ScienceDomain'
import Certification from './Certification'


export default class ThirdColumn extends Component{
        render(){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <ColumnHeader
                                title='科普乐园'
                                isMore={true}
                                isCenter={false}/>
                            <ScienceDomain/>
                        </Col>
                        <Col span={5} offset={1}>
                            <Certification
                                title='资质认证'
                                isMore={true}
                                isCenter={false}/>
                        </Col>
                        <Col span={5} offset={1}>
                            <ColumnHeader
                                title={'专利'}
                                id={'1'}
                                isMore={true}
                                isCenter={false}/>
                                <NewsListBlock haveLine={true}/> 
                        </Col>
                        <Col span={5} offset={1}>
                            <ColumnHeader
                                title={'产品'}
                                id={'1'}
                                isMore={true}
                                isCenter={false}/>
                                <NewsListBlock haveLine={true}/> 
                        </Col>
                    </Row>
                </div> 
            )
        }
}