import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../../components/common/SiderMenu';

export default class BranchSider extends Component {
    render() {
        const category = this.props.category
        return (
            <SiderMenu category={this.props.category}/>
        )
    }
}