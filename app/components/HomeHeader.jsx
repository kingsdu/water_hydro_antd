import React,{Component} from 'react'
import {Layout,Row,Col,Button} from 'antd'
import {NavLink} from 'react-router-dom'

const {Header} = Layout

export default class HomeHeader extends Component{
    render(){
        return(
            <div className='outer-header'>
                <Header className='wrap'>
                    <Row>
                        <Col span={4}>
                            <a href='/' className='logo'/>
                        </Col>
                        <Col span={11} offset={2}>
                            <img src='http://i4.bvimg.com/622218/909a7e21222fc3b5.jpg' className='branch-title'/>
                        </Col>
                        <Col span={2} offset={5}>
                            <Button type="primary">登录</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ul className='header_tab'>
                                <li><NavLink to='/' activeClassName='header_curPage'>首页</NavLink></li>
                                <li><NavLink to='/branch/brachInfo' activeClassName='header_curPage'>分会介绍</NavLink></li>
                                <li><NavLink to='/academic/dynamicsWork' activeClassName='header_curPage'>学术交流</NavLink></li>
                                <li><NavLink to='/award/rewardDynamics' activeClassName='header_curPage'>表彰奖励</NavLink></li>
                                <li><NavLink to='/certification/titlereview' activeClassName='header_curPage'>资质认证</NavLink></li>
                                <li><NavLink to='/SciencePark/scienceDynamics' activeClassName='header_curPage'>科普园地</NavLink></li>
                                <li><NavLink to='/membershipService/titlereview' activeClassName='header_curPage'>会员服务</NavLink></li>
                                <li><NavLink to='/digitalData/academicPapers' activeClassName='header_curPage'>数字资料</NavLink></li>
                            </ul>
                        </Col>
                    </Row>
                </Header>  
            </div>
        )
    }
}