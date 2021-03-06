import React, {Component} from 'react'
import {Card, Col, Row} from 'antd'
import {Link} from 'react-router-dom'


export default class DigtalTextList extends Component{
    render(){
        const {data} = this.props
        return(
            <div>
                {
                    data&&data.map(
                        item => (
                            <div className='ContentTextList' key={item.id}>
                                <Row className='Row'>
                                    <Col className='content-link' span={20}>
                                        <Link className='link' to={'/child/digitalData/digital2/'+item.id+'|1'} target="_Blank">{item.title}</Link>
                                    </Col>
                                    <Col span={3} offset={1}>
                                        {item.startTime}
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