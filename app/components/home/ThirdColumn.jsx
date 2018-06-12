import React, {Component} from 'react'
import {Row, Col} from 'antd'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'

export default class ThirdColumn extends Component{
        render(){
            return(
                <div>
                    <Row>
                        <Col span={7}>
                            <ColumnHeader
                            title='教育培训'
                            id='xhxw'
                            isMore={true}
                            isCenter={false}/>
                            <NewsListBlock isCenter={false} iconType='3'/>
                        </Col>
                        <Col span={7} offset={1}>
                            <ColumnHeader
                            title='考核评优'
                            id='xhxw'
                            isMore={true}
                            isCenter={false}/>
                            <NewsListBlock isCenter={false} iconType='3'/>
                        </Col>
                        <Col span={7} offset={1}>
                            <ColumnHeader
                            title='会员单位'
                            id='xhxw'
                            isMore={true}
                            isCenter={false}/>
                            <NewsListBlock isCenter={false} iconType='3'/>
                        </Col>
                    </Row>
                </div> 
            )
        }
}