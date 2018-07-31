import React, {Component} from 'react'
import {Row,Col} from 'antd'

export default class SponsorTextList extends Component{
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
                                        <a href={item.content}  target="_Blank">{item.title}</a>
                                    </Col>
                                    <Col span={3} offset={1}>
                                        {item.pubtime}
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