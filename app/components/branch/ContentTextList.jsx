import React, {Component} from 'react'
import {Card, Col, Row} from 'antd'
import {Link} from 'react-router-dom'


export default class ContentTextList extends Component{

    render(){
        const {data,categoty} = this.props
        return(
            <div>
                {
                    data&&data.map(
                        item => (
                            <div className='ContentTextList' key={item.id}>
                                <Row className='Row'>
                                    <Col className='content-link' span={20}>
                                        <Link className='link' to={'/child/'+categoty+'/'+item.id}>{item.title}</Link>
                                    </Col>
                                    <Col span={3} offset={1}>
                                        {item.date}
                                    </Col>   
                                </Row> 
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}