import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import ContentHolderList from '../components/branch/ContentHolderList'
import SponsorHolderList from '../components/branch/SponsorHolderList'
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
                <div className="AwardContainer">
                    <Row>
                        <Col span={5}>
                            <BranchSider module={module}/>
                        </Col>
                        <Col span={18} offset={1} className='col_content'>
                            <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                            <AwardForm module={'awardsIntroduced'}/>
                        </Col>
                    </Row>
                </div>
            )
        }else if(module == 'Sponsors'){
            return(
                <div className="AwardContainer">
                    <Row>
                        <Col span={5}>
                            <BranchSider module={module}/>
                        </Col>
                        <Col span={18} offset={1} className='col_content'>
                            <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                            <SponsorHolderList category={this.state.category} module={this.props.match.params.module} total={this.state.data}/>
                        </Col>
                    </Row>
                </div>
            )
        }else{
            return(
                <div className="AwardContainer">
                    <Row>
                        <Col span={5}>
                            <BranchSider module={module}/>                
                        </Col>
                        <Col span={18} offset={1} className='col_content'>                     
                            <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                            <ContentHolderList category={this.state.category} module={this.props.match.params.module} total={this.state.data}/>                     
                        </Col>
                    </Row>
                </div>
            )
        }
       
    }
}