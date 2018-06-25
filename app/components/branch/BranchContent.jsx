import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentText from '../../components/branch/ContentText'
import ContentHolder from '../../components/branch/ContentHolder'
import ContentHolderList from '../../components/branch/ContentHolderList'
import ContentDetails from '../../components/branch/ContentDetails'
import {Col, Row ,Card} from 'antd'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import BranchSider from '../../components/branch/BranchSider'
import { getContentByModule,getMenuDetailByModule } from '../../common/utils'

export default class BranchContent extends Component{
    render(){
        const params = this.props.match.params
        //判断是那种类型：1 NoList；2 Lits；3 Details
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
                                <ContentHolderList params={params} count={20}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}
