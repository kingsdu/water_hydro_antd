import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../../components/common/SiderMenu';

export default class BranchSider extends Component {
    render() {
        const module = this.props.module
        return (
            <SiderMenu module={this.props.module}/>
        )
    }
}