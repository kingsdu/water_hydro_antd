import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import ContentHolderList from '../components/branch/ContentHolderList'
import { DEFAULT_COUNT,DEFAULT_START } from '../config/constant/commonConstant'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../common/utils'


/**
 * 学术交流
 * 
 * 
 */
export default class AcdemicContainer extends Component{
    state={
        data:null,
        category:"academic"
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
                            <ContentHolderList module={this.props.match.params.module} total={this.state.data}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}