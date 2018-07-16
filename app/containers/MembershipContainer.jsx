import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import MemberFrom from '../components/memberService/MemberForm'
/**
 * 会员服务
 * --申请会员
 * --职称评审
 * --会员风采
 */
export default class MembershipContainer extends Component{
    state={
        data:null,
        category:"membershipService"
    }


    render(){
        return(
            <div>
                <Row>
                    <Col span={5}>
                        <Card>
                            <BranchSider category={this.state.category}/>
                        </Card>
                    </Col>
                    <Col span={18} offset={1}>
                        <Card>
                            <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                            <MemberFrom/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}