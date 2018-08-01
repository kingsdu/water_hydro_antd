import React, {Component} from 'react'
import ContentHeader from '../components/common/ContentHeader'
import ContentHolder from '../components/branch/ContentHolder'
import ContentHolderList from '../components/branch/ContentHolderList'
import ContentDetails from '../components/branch/ContentDetails'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../common/utils'
import {DEFAULT_COUNT , DEFAULT_START} from '../config/constant/commonConstant'

/**
 * 分会介绍模块
 */
export default class BranchContainer extends Component{
    state = {
        data:null,
        category:"branch"
    }

    render(){
        const module = this.props.match.params.module;
        return(
            <div className='BranchContainer'>
                <Row>
                    <Col span={5}>
                        <BranchSider module={module}/>
                    </Col>
                    <Col span={18} offset={1} className='col_content'>
                        <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                        <ContentHolder module={this.props.match.params.module} count={20}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
