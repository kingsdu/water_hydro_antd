import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { menu } from '../../config/constant/menu'

const renderMenuItem =
    ({key,title,icon}) =>
        <Menu.Item
                key={key}
            >
                <Link to={key}>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </Link>
        </Menu.Item>;

const renderSubMenu =
    ({ key, title, icon, sub}) =>
        <Menu.SubMenu
            key={key}
            title={
                <span>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </span>
            }
        >
            {sub && sub.map(item => renderMenuItem(item))}
        </Menu.SubMenu>;

const SliderMenu = ({category}) => {
    const menuData = menu.filter(function(item){
        if(item.key == category){
            return item.key
        }
    })

    return(
        //antd中于default相关的就需要，在UI第一遍初始化时，就确定值
        //可以用用openkeys和selectkeys代替
        <Menu mode={'inline'}
        openKeys={[menuData[0].key]}
        selectedKeys={[menuData[0].sub[0].key]}
        style={{ width: 197 }}>
            {menuData && menuData.map(
                item => item.key && item.key.length ?
                    renderSubMenu(item) : renderMenuItem(item)
            )}
        </Menu>
    )
} 

export default SliderMenu