import React, {Component} from 'react'
import {Row, Col ,Tabs} from 'antd'
import {Link} from 'react-router-dom'

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
                            <Col span={9} offset={3}>
                                <Link className='link' to={'/child/membershipService/applicationForMembership'} target="_Blank">
                                    <img src='http://chuantu.biz/t6/337/1530456748x-1404817497.png'/>
                                    <p>{'入会申请'}</p>
                                </Link>
                            </Col>
                            <Col span={9} offset={3}>
                                <Link className='link' to={'/child/award/AwardApplication'} target="_Blank">
                                    <img src='http://chuantu.biz/t6/337/1530456988x-1404817497.png'/>
                                    <p>{'奖项申报'}</p>
                                </Link>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="资源中心" key="2">
                        <Row className='SwitchHeader-row-1'>
                            <Col span={7} offset={1}>
                                <img src='http://chuantu.biz/t6/337/1530457092x-1404817497.png'/>
                                <p>会议论文集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://chuantu.biz/t6/337/1530457210x-1404817497.png'/>
                                <p>会议视频集</p>
                            </Col>
                            <Col span={7} offset={1}>
                                <img src='http://chuantu.biz/t6/337/1530457249x-1404817497.png'/>
                                <p>会议PPT</p>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}