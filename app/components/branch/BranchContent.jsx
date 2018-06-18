import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentText from '../../components/branch/ContentText'
import ContentHolder from '../../components/branch/ContentHolder'
import {Col, Row ,Card} from 'antd'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import BranchSider from '../../components/branch/BranchSider'
import { getContentByModule } from '../../common/getContentByModule'


export default class BranchContent extends Component{
    state = {
        result:[] //存储列表信息
    }

    componentDidMount(){
        //获取数据
        const params = this.props.match.params
        const data = getContentByModule(params.module)
        this.resultHandle(data)
    }
    

    resultHandle(data){
        data.then(res => {     
            return res.json()
        }).then(json =>{
            const data = json;
            this.setState({
                result:data
            })
        })
    }
    

    render(){
        const params = this.props.match.params
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
                            <ContentHolder params={this.state.result}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
