import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'
import ContentText from '../../components/branch/ContentText'
import { branch_intro } from '../../config/constant/branch_intro'

import {Col, Row} from 'antd'

export default class BranchContent extends Component{
    render(){
        const params = this.props.match.params.branchName
        return(
            <div>
                <Row>
                    <ContentHeader title={params}/>
                </Row>
                <Row>
                    <ContentText contentData={branch_intro}/>
                </Row>
            </div>
        )
    }
}
