import React, { Component } from 'react';
import { Layout } from 'antd';
import { branch_menu } from '../../config/constant/branch_menu';
import SiderMenu from '../../components/common/SiderMenu';

const { Sider } = Layout;

class CommunicateSider extends Component {
    state = {
        current: '/child/structure/dynamicsWork',
    };

    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
    }

    render() {
        return (
            <SiderMenu
            menus={ branch_menu }
            mode="inline"
            defaultOpenKeys={['app1']}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            style={{ width: 197 }}/>
        )
    }
}

export default CommunicateSider