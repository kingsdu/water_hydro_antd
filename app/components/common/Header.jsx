import React from 'react'
import {Link, IndexLink} from 'react-router'
import {Layout, Row, Col} from 'antd'
import { Button } from 'antd'

const {Header} = Layout

const Head = () => {
    return (
        <div className='outer-header'>
            <Header className='wrap'>
                <Row>
                    <Col span={4}>
                        <a href='/' className='logo'/>
                    </Col>
                    <Col span={11} offset={2}>
                        <img src='http://i2.bvimg.com/622218/909a7e21222fc3b5.jpg' className='branch-title'/>
                    </Col>
                    <Col span={2} offset={5}>
                        <Button type="primary">登录</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ul className='header_tab'>
                            <li><IndexLink to='/' activeClassName='header_curPage'>首页</IndexLink></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>分会介绍</Link></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>学术交流</Link></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>表彰奖励</Link></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>资质认证</Link></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>科普园地</Link></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>会员服务</Link></li>
                            <li><Link to='/movie' activeClassName='header_curPage'>数字资料</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Header>   
        </div>
    )
}

export default Head