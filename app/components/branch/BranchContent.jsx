import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentHolder from '../../components/branch/ContentHolder'
import ContentHolderList from '../../components/branch/ContentHolderList'
import ContentDetails from '../../components/branch/ContentDetails'
import {Col, Row ,Card} from 'antd'

import BranchSider from '../../components/branch/BranchSider'
import {getContentByModule , getMenuDetailByModule,getInfoCount} from '../../common/utils'
import {DEFAULT_COUNT , DEFAULT_START} from '../../config/constant/commonConstant'


export default class BranchContent extends Component{
    state={
        data:null
    }

    //获取总页数，但此方法只在一处被使用，性能方面做的不好（代码腐化）
    componentDidMount(){
        const module = this.props.match.params.module;
        const menuType = getMenuDetailByModule(module)
        if(menuType == 'NoList'){
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
        }else if(menuType == 'List'){
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
        const params = nextProps.match.params
        //判断是那种类型：1 NoList；2 List；3 Details
        const menuType = getMenuDetailByModule(params.module)
        if(menuType == 'List'){
            if(nextProps.match.params.module !== this.props.match.params.module){
                const module = nextProps.match.params.module;
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
    }



    render(){
        const params = this.props.match.params
        //判断是那种类型：1 NoList；2 List；3 Details
        const menuType = getMenuDetailByModule(params.module)
        if(menuType == 'NoList'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider category={params.category}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentHeader params={params}/>
                                <ContentHolder params={params} count={20}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else if(menuType == 'Details'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider category={params.category}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentDetails params={params}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else if(menuType == 'List'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider category={params.category}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentHeader params={params}/>
                                <ContentHolderList params={params} total={this.state.data}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}
