import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class MemberServiceDetail extends Component {
    render(){
        const size = 'large'
        return(
            <div className='MemberServiceDetail'>
                <Row className='MemberServiceDetail-row-1'>
                    <Col span={24}>
                        <img src="http://i1.bvimg.com/622218/3ff94b8ee535a465.png"/>
                    </Col>
                </Row>
                <Row className='MemberServiceDetail-row-2'>
                    <Col span={24}>
                        <img src="http://i1.bvimg.com/622218/22dff406a6756150.png"/>
                    </Col>
                </Row>
            </div>
        )
    }
}