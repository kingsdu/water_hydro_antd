import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentText from '../../components/branch/ContentText'
import ContentHolder from '../../components/branch/ContentHolder'
import {Col, Row ,Card} from 'antd'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import BranchSider from '../../components/branch/BranchSider'
import { getContentByModule } from '../../common/utils'


export default class BranchContent extends Component{
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
                            <ContentHolder params={params} count={20}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
