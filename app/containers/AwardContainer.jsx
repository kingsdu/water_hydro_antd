import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import ContentHolderList from '../components/branch/ContentHolderList'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../common/utils'
import AwardForm from '../components/awardService/AwardForm'

/**
 * 表彰奖励
 */
export default class AwardContainer extends Component{
    state={
        data:null,
        category:"award"
    }

     componentDidMount(){
        const module = this.props.match.params.module;
        const result = getInfoCount(module);
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    componentWillReceiveProps(nextProps) {
        const module = nextProps.match.params.module
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


    render(){
        const module = this.props.match.params.module;
        if(module == 'AwardApplication'){
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
                                <AwardForm module={'awardsIntroduced'}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else{
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
                                <ContentHolderList category={this.state.category} module={this.props.match.params.module} total={this.state.data}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
       
    }
}