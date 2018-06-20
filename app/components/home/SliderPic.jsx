import React, {Component} from 'react'
import {Col, Row} from 'antd'
import {Link} from 'react-router-dom'

//首页切换大图
const SliderPic = ({imageUrl}) => {
    return(
        <div className='SliderPic'>
            <Row>
                <Col span={6}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img1' src='http://i1.bvimg.com/622218/68b50eb9cf75b5e8.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img2' src='http://i1.bvimg.com/622218/63f09878b3efb994.png'/>
                    </a>
                </Col>
                <Col span={3} offset={3}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img3' src='http://i1.bvimg.com/622218/2a362a939ba30272.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img4' src='http://i1.bvimg.com/622218/7c92088886e4b5f6.png'/>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img1' src='http://i1.bvimg.com/622218/a69b8beea97b30d9.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img2' src='http://i1.bvimg.com/622218/b3cc1acd8ec3571c.png'/>
                    </a>
                </Col>
                <Col span={4} offset={2}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img3' src='http://i1.bvimg.com/622218/656aebf5671002ab.png'/>
                    </a>
                </Col>
                <Col span={5} offset={1}>
                    <a href='http://www.cgs.org.cn/'>
                        <img className='img4' src='http://i1.bvimg.com/622218/2b2527e0b7812712.png'/>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default SliderPic