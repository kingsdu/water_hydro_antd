import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import ContentHolderList from '../components/branch/ContentHolderList'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../common/utils'


/**
 * 科普园地
 */
export default class ScienceParkContainer extends Component{
    state={
        data:null,
        category:"SciencePark"
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
        return(
            <div className='ScienceParkContainer'>
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