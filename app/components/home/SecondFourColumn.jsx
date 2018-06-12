import React, {Component} from 'react'

import {Row, Col} from 'antd'
import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'

const SecondFourColumn = () =>{
    return(
        <div>
            <Row className='row-bottom'>
                <Col span={10} offset={1}>
                    <ColumnHeader
                    title='协会新闻'
                    id='xhxw'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
                </Col>
                <Col span={10} offset={2}>
                    <ColumnHeader
                    title='水利要闻'
                    id='xsjl'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
                </Col>
            </Row>
            <Row>
                <Col span={10} offset={1}>
                    <ColumnHeader
                    title='政策法规'
                    id='bzjl'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
                </Col>
                <Col span={10} offset={2}>
                    <ColumnHeader
                    title='行规行约'
                    id='px'
                    isMore={true}
                    isCenter={false}/>
                    <NewsListBlock isCenter={false}/>
                </Col>
            </Row>
        </div>
    )
}

export default SecondFourColumn