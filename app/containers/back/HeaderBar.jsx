import React from 'react'
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class HeaderBar extends React.Component {
    render(){
        return(
            <Menu
                mode="horizontal">
                <SubMenu title={<span><Icon type="user" /></span>}>
                    <Menu.Item key="sign_out"><Link to="/login">退出登陆</Link></Menu.Item>
                    <Menu.Item key="back_front"><Link to="/">返回首页</Link></Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}