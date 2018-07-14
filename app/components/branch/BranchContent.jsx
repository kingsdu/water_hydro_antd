import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentHolder from '../../components/branch/ContentHolder'
import ContentHolderList from '../../components/branch/ContentHolderList'
import ContentDetails from '../../components/branch/ContentDetails'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../../components/branch/BranchSider'
import {getContentByModule,getMenuDetailByModule,getInfoCount} from '../../common/utils'
import {DEFAULT_COUNT , DEFAULT_START} from '../../config/constant/commonConstant'


export default class BranchContent extends Component{
    state={
        data:null
    }

    componentDidMount(){
        const module = this.props.match.params.module;
        const count = DEFAULT_COUNT;
        const start = DEFAULT_START;
        const data = getContentByModule(start,count,module)
        data.then((data)=>{
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
                            <BranchSider category={"branch"}/>
                        </Card>
                    </Col>
                    <Col span={18} offset={1}>
                        <Card>
                            <ContentHeader category={"branch"} module={this.props.match.params.module}/>
                            <ContentHolder module={this.props.match.params.module} count={20}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
