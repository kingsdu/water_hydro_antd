import React, {Component} from 'react'
import {Card, Col, Row} from 'antd'

const ContentText = ({contentData}) => {
    return(
        <div>
            {contentData&&contentData.map(
                item => (
                item.imageUrl ? 
                <div className='OrganizationStr'>
                    <Row>
                        <img src={item.imageUrl}/>   
                    </Row>
                </div>
                :
                <div className='ContentText'>
                    <h1>{item.title}</h1>
                    <Row>
                        <Col span={24}>
                            {
                                item.content.split("|").map(
                                    item => (
                                        <p className='ContentText_p'>{item}</p>
                                    )
                                )
                            }
                        </Col>                      
                    </Row> 
                </div> 
                )
            )}
        </div>
    )
}
    


export default ContentText