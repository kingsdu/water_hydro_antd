import React, {Component} from 'react'
import {Row, Col} from 'antd'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from './NewsListBlock'


const ThirdColumn = () => {
    return (
       <div>
           <Row>
               <Col span={7}>
                    <ColumnHeader
                    title='教育培训'
                    id='xhxw'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
               </Col>
               <Col span={7} offset={1}>
                    <ColumnHeader
                    title='考核评优'
                    id='xhxw'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
               </Col>
               <Col span={7} offset={1}>
                    <ColumnHeader
                    title='会员单位'
                    id='xhxw'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
               </Col>
            </Row>
       </div> 
    )
}

export default ThirdColumn