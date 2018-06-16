import React, { Component } from 'react';
import { Layout } from 'antd';
import { Communicate } from '../../config/constant/Communicate';
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
            menus={ Communicate }
            mode="inline"
            defaultOpenKeys={['app2']}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            style={{ width: 197 }}/>
        )
    }
}

export default CommunicateSider