import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentText from '../../components/branch/ContentText'
import { menu } from '../../config/constant/menu'
import {Col, Row} from 'antd'

export default class BranchContent extends Component{
    render(){
        const params = this.props.match.params
        return(
            <div>
                <Row>
                    <ContentHeader params={params}/>
                </Row>
                <Row>
                </Row>
            </div>
        )
    }
}
