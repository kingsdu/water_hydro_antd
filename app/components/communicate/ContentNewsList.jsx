import React, { Component } from 'react';
import {Icon, Col, Row } from 'antd';
import {Link} from 'react-router-dom'

const ContentNewsList = ({contentListData}) => {
    return(
        <div>
            {contentListData&&contentListData.map(
                item => (
                    <div className='ContentNewsList'>
                        <Row>
                            <Col span={17}>
                                <Link to={'/content/'+item.uniquekey}><p><Icon type="right" />{item.title}</p></Link>
                            </Col>
                            <Col span={3} offset={4}>
                                <p>{item.pubTime}</p>
                            </Col>
                        </Row>
                    </div>    
                )
            )}   
        </div>
    )
}

export default ContentNewsList