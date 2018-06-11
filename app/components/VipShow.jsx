import React, {Component} from 'react'
import {Row, Col, Carousel} from 'antd'

export default class VipShow extends Component{
    render(){
        return(
            <div className='vipshow'>
                <Carousel autoplay>
                    <Row>
                        <Col span={8}>
                            <img src="http://i1.bvimg.com/622218/c7c2cfb958fecdf9.jpg"/>
                        </Col>
                        <Col span={14} offset={1}>
                            <p>王毅，男，汉族，1953年10月生，北京市人，1969年9月参加工作，1981年5月加入中国共产党，北京第二外国语学院亚非语系日语专业毕业，大学学历，经济学硕士学位。</p>
                        </Col>
                    </Row>
                    <Row>
                         <Col span={8}>
                            <img src="http://i4.bvimg.com/622218/4728bd3865630e89.jpg"/>
                        </Col>
                        <Col span={14} offset={1}>
                            <p>王毅，男，汉族，1953年10月生，北京市人，1969年9月参加工作，1981年5月加入中国共产党，北京第二外国语学院亚非语系日语专业毕业，大学学历，经济学硕士学位。</p>
                        </Col>
                    </Row>
                </Carousel>
            </div>
        )
    }
}