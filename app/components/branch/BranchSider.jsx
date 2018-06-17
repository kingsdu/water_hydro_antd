import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../../components/common/SiderMenu';

import { menu } from '../../config/constant/menu'

const { Sider } = Layout;

export default class BranchSider extends Component {
    state = {
        mode:'inline',
        current : '',//当前默认选择的子菜单
        menuData : '',
        defaultKey : ''
    };

    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
    }

    componentDidMount(){
        const category = this.props.category
        const menuData = menu.filter(function(item){
            if(item.key == category){
                return item.key
            }
        })

        this.setState({
            defaultKey: menuData[0].key,
            current:menuData[0].sub[0].key,
            menuData:menuData,
        })

    }

    render() {
        const category = this.props.category
        const menuData = menu.filter(function(item){
            if(item.key == category){
                return item.key
            }
        })
        //antd中于default相关的就需要，在UI第一遍初始化时，就确定值
        const defaultKey = menuData[0].key
        const current = menuData[0].sub[0].key
        return (
            <SiderMenu
            menus={ this.state.menuData }
            mode={this.state.mode}
            defaultOpenKeys={[defaultKey]}
            onClick={this.handleClick}
            defaultSelectedKeys={[current]}
            style={{ width: 197 }}/>
        )
    }
}