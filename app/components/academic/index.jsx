import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../../components/branch/BranchSider'
import ContentHeader from '../common/ContentHeader'
import ContentHolderList from '../../components/branch/ContentHolderList'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../../common/utils'
/**
 * 
 */
export default class AcdemicContainer extends Component{
    state={
        data:null
    }

     //获取总页数，但此方法只在一处被使用，性能方面做的不好（代码腐化）
     componentDidMount(){
        const module = this.props.match.params.module;
        const count = DEFAULT_COUNT;
        const start = DEFAULT_START;
        const result = getInfoCount(module);
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={5}>
                        <Card>
                            <BranchSider category={"academic"}/>
                        </Card>
                    </Col>
                    <Col span={18} offset={1}>
                        <Card>
                            <ContentHeader category={"academic"} module={this.props.match.params.module}/>
                            <ContentHolderList module={this.props.match.params.module} total={this.state.data}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}