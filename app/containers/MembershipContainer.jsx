import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import MemberFrom from '../components/memberService/MemberForm'
import ContentHolder from '../components/branch/ContentHolder'
import ContentPicHolder from '../components/branch/ContentPicHolder'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../common/utils'


/**
 * 会员服务
 * --入会流程
 * --权利与义务
 * --会员风采
 * --入会申请
 */
export default class MembershipContainer extends Component{
    state={
        data:null,
        category:"membershipService"
    }

    componentDidMount(){
        const module = this.props.match.params.module;
        if(module == 'memberInformation'){
            const result = getInfoCount(module);
            result.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data,
                    }); 
                }      
           })
        }
    }


    componentWillReceiveProps(nextProps) {
        const module = nextProps.match.params.module
        if(module == 'memberInformation'){
            if(module !== this.props.match.params.module){
                const result = getInfoCount(module);
                result.then((data)=>{
                    if(data.Result == 'success'){
                        this.setState({
                            data: data.Data
                        }); 
                    }      
                })
            }
        }
    }


    render(){
        const module = this.props.match.params.module;
        //根据module区分不同的模块
        //1 入会流程
        //2 权利与义务
        //3 会员风采
        //4 入会申请
        if(module == 'incorporationProcess'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider module={module}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                                <ContentHolder module={this.props.match.params.module}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else if(module == 'rightsAndObligations'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider module={module}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                                <ContentHolder module={this.props.match.params.module}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else if(module == 'memberInformation'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider module={module}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                                <ContentPicHolder total={this.state.data} module={this.props.match.params.module}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else if(module == 'applicationForMembership'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider module={module}/>
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
}