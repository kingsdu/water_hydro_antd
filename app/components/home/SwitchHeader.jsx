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
                                <img src='http://i1.bvimg.com/622218/9b931ac700683cdc.jpg'/>
                                <p>水利专家库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/b71873a27a7acdcf.jpg'/>
                                <p>水利成果库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/5b240b51a534bf77.jpg'/>
                                <p>大禹奖申报</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/0fb64ddd524b41f5.jpg'/>
                                <p>水利专家库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/0fb64ddd524b41f5.jpg'/>
                                <p>水利成果库</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/b31d320a2b92b51b.jpg'/>
                                <p>大禹奖申报</p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="资源中心" key="2">
                        <Row className='SwitchHeader-row-1'>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/9b931ac700683cdc.jpg'/>
                                <p>会议论文集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/b71873a27a7acdcf.jpg'/>
                                <p>会议视频集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/5b240b51a534bf77.jpg'/>
                                <p>会议PPT</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/0fb64ddd524b41f5.jpg'/>
                                <p>会议论文集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/0fb64ddd524b41f5.jpg'/>
                                <p>会议视频集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://i1.bvimg.com/622218/b31d320a2b92b51b.jpg'/>
                                <p>会议PPT</p>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}