import React from 'react'
import {Layout, Row, Col} from 'antd'

const {Footer} = Layout

const CommonFooter = () => {
    return (
        <div className='outer-footer'>
            <Footer className='wrap tc'>
                <Row>
                    <Col span={10} offset={1}>
                    <p className='bottom-p'>版权所有：中国地球物理学会水利电力分会 鄂ICP备 13004223 号</p>
                    <p className='bottom-p'>地址：武汉市江岸区惠济路48号（401034）</p>
                    <p className='bottom-p'>Email：dqwlxslsd@126.com</p>
                    </Col>
                    <Col span={2} offset={2}>
                        <img src='http://chuantu.biz/t6/337/1530426170x-1404817497.jpg'/>
                    </Col>
                    <Col span={8} offset={1}>
                        <img className='bottom-img' src='http://chuantu.biz/t6/337/1530426202x-1404817497.jpg'/>
                        <img src='http://chuantu.biz/t6/337/1530426202x-1404817497.jpg'/>
                        <div>
                            <p className='bottom-img-p-l'>官方微信</p>
                            <p className='bottom-img-p'>小程序</p>
                        </div>
                    </Col>
                </Row>
            </Footer>
        </div>
    )
}

export default CommonFooter
