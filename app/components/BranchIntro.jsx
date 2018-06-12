import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class BranchIntro extends Component{
    render(){
        return(
            <div className='branchIntro'>
                <Row>
                    <Col span={8}>
                        <p>简介</p>
                    </Col>
                    <Col span={8}>
                        <p>组织机构</p>
                    </Col>
                    <Col span={8}>
                        <p>大事记</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <p>发展</p>
                    </Col>
                    <Col span={8}>
                        <p>部分介绍</p>
                    </Col>
                    <Col span={8}>
                        <p>章程</p>
                    </Col>
                </Row>
            </div>
        )
    }
}