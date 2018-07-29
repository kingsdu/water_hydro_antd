import React, {Component} from 'react'
import {Col, Row} from 'antd'
import {Link} from 'react-router-dom'

//首页切换大图
const SliderPic = () => {
    return(
        <div className='SliderPic'>
            <Row>
                <Col span={6}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img1' src='http://chuantu.biz/t6/339/1530841706x-1404817497.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img2' src='http://chuantu.biz/t6/339/1530841733x-1404817497.png'/>
                    </a>
                </Col>
                <Col span={3} offset={3}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img3' src='http://chuantu.biz/t6/339/1530841876x-1404817497.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img4' src='http://chuantu.biz/t6/339/1530841929x-1404817497.png'/>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img1' src='http://chuantu.biz/t6/339/1530842177x-1404817497.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img2' src='http://chuantu.biz/t6/339/1530841802x-1404817497.png'/>
                    </a>
                </Col>
                <Col span={4} offset={2}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img3' src=' http://chuantu.biz/t6/337/1530425863x-1404817497.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'  target="_Blank">
                        <img className='img4' src='http://chuantu.biz/t6/339/1530841830x-1404817497.png'/>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default SliderPic