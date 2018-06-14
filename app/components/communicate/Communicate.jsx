import React, {Component} from 'react'
import ContentHeader from '../common/ContentHeader'

import {Col, Row} from 'antd'

export default class Communicate extends Component{
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