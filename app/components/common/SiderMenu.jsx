import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const renderMenuItem =
    ({ key, title, icon, link, ...props }) =>
        <Menu.Item
                key={key || link}
                {...props}
            >
                <Link to={link || key}>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </Link>
        </Menu.Item>;

const renderSubMenu =
    ({ key, title, icon, link, sub, ...props }) =>
        <Menu.SubMenu
            key={key || link}
            title={
                <span>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{title}</span>
                </span>
            }
            {...props}
        >
            {sub && sub.map(item => renderMenuItem(item))}
        </Menu.SubMenu>;

const MenuData = ({menus,...props}) => {
    return(
        <Menu {...props}>
            {menus && menus.map(
                item => item.key && item.key.length ?
                    renderSubMenu(item) : renderMenuItem(item)
            )}
        </Menu>
    )
} 

export default MenuData