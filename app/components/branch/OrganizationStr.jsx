import React, {Component} from 'react'
import {Row} from 'antd'
import ContentHeader from '../common/ContentHeader'


export default class OrganizationStr extends Component{
    render(){
        const params = this.props.match.params.module
        return(
            <div className='OrganizationStr'>
                <Row>
                    <ContentHeader title={params}/>
                </Row>
                <Row>
                    <img src='http://i4.bvimg.com/622218/b3c6849eeba69d16.png'/>   
                </Row>
            </div>
        )
    }
}