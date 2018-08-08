import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {Layout,Row, Col,Button} from 'antd'


const {Header} = Layout
///login

const CommonHeader = () => {
    return (
        <div className='outer-header'>
            <Header className='wrap'>
                <Row>
                    <Col span={4}>
                        <a href='javascript:void(0)' className='logo'/>
                    </Col>
                    <Col span={11} offset={2}>
                        <img src='http://chuantu.biz/t6/337/1530425991x-1404817497.jpg' className='branch-title'/>
                    </Col>
                    <Col span={2} offset={5}>
                        <Button type="primary">
                            <Link to='/login' target="_Blank">登录</Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ul className='header_tab'>
                            <li><NavLink to='/' activeClassName='header_curPage'>首页</NavLink></li>
                            <li><NavLink to='/child/branch/brachInfo' activeClassName='header_curPage'>分会介绍</NavLink></li>
                            <li><NavLink to='/child/dynamic/announcement' activeClassName='header_curPage'>分会动态</NavLink></li>
                            <li><NavLink to='/child/Academic/meetingAnnouncement' activeClassName='header_curPage'>学术交流</NavLink></li>
                            <li><NavLink to='/child/SciencePark/sciencePropaganda' activeClassName='header_curPage'>科普园地</NavLink></li>
                            <li><NavLink to='/child/membershipService/incorporationProcess' activeClassName='header_curPage'>会员专区</NavLink></li>
                            <li><NavLink to='/child/award/rewardDynamics' activeClassName='header_curPage'>表彰奖励</NavLink></li>
                            <li><NavLink to='/child/digitalData/digital1/annualMeeting' activeClassName='header_curPage'>数字资料</NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Header>   
        </div>
    )
}

export default CommonHeader