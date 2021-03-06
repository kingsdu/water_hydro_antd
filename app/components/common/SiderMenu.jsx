import React, {Component}from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { getdefaultName,getChildItem } from '../../common/utils'
import { menu } from '../../config/constant/menu'


export default class SliderMenu extends Component{
    state = {
        openKeys: [''],
        data:[],
    };

    render() {
        const module = this.props.module;
        const resCategory = getChildItem(module)
        const menuData = menu.filter(function(item){
            if(item.key == resCategory){
                return item.key
            }
        })
        const defaultOpenKeys = getdefaultName(module).split("|")[0]
        const defaultSelectedKeys = getdefaultName(module).split("|")[1]
        /*
        此处需要使用
        openKeys 和 defaultSelectedKeys的组合
        openKeys：当前展开的 SubMenu 菜单项 key 数组(使用defaultOpenKeys会导致切换页面菜单无法自动打开)    //sub层
        defaultSelectedKeys：初始选中的菜单项 key 数组   //item层
        */
        return(
            <div className='Menu_div'>
                <Menu
                mode={'inline'} 
                defaultSelectedKeys={[defaultSelectedKeys]}
                openKeys={[defaultOpenKeys]}
                style={{ width: 197 }}>
                    {
                        menuData && menuData.map((item) => {
                            return (
                                <Menu.SubMenu key={item.key} title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
                                    {item.sub && item.sub.map(subItem => (
                                        <Menu.Item key={subItem.key}> <Link to={subItem.key}>{subItem.title}</Link></Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }

}