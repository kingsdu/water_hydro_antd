import React,{Component} from 'react';
import {Card, BackTop, Icon, Col, Row} from 'antd'

import Home_Carousel from '../components/Home_Carousel/Home_Carousel'

/**
 * 首页内容模块
 */

export default class HomeMainContainer extends Component{
    render(){
        return(
            <div className='wrap center'>
                <Row>
                    <Col span={24}>
                        <Card>
                            <Home_Carousel
                            vertical={false}
                            dots={true}
                            autoplay={true}
                            type={0}
                            />         
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}