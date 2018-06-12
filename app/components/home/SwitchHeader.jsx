import React, {Component} from 'react'
import {Row, Col ,Tabs} from 'antd'

const TabPane = Tabs.TabPane;

// 头部标题切换
export default class SwitchHeader extends Component{
    render(){
        const { large } = "large";
        return(
            <div className='SwitchHeader'>
                <Tabs defaultActiveKey="1" size={large}>
                    <TabPane tab="在线服务" key="1" className='SwitchHeader-TabPane'>
                        <Row className='SwitchHeader-row-1'>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/c845aa99d28d0485.png'/>
                                <p>水利专家库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/335d86c75c708202.png'/>
                                <p>水利成果库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/7a133baac0815ee4.png'/>
                                <p>大禹奖申报</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/c845aa99d28d0485.png'/>
                                <p>水利专家库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/335d86c75c708202.png'/>
                                <p>水利成果库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/7a133baac0815ee4.png'/>
                                <p>大禹奖申报</p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="资源中心" key="2">
                        <Row className='SwitchHeader-row-1'>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/c845aa99d28d0485.png'/>
                                <p>会议论文集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/335d86c75c708202.png'/>
                                <p>会议视频集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/7a133baac0815ee4.png'/>
                                <p>会议PPT</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/c845aa99d28d0485.png'/>
                                <p>会议论文集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/335d86c75c708202.png'/>
                                <p>会议视频集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i2.bvimg.com/622218/7a133baac0815ee4.png'/>
                                <p>会议PPT</p>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}