import React, {Component} from 'react'
import CommunicateHeader from '../communicate/CommunicateHeader'

import {Row} from 'antd'
import {getNewsListData} from '../../common/fetch'
import ContentNewsList from '../communicate/ContentNewsList'



export default class Communicate extends Component{
    state = {
        data: null
    }

    render(){
        const params = this.props.match.params.branchName
        return(
            <div>
                <Row>
                    <CommunicateHeader title={params}/>
                </Row>
                <Row>
                    <ContentNewsList contentListData={this.state.data}/>
                </Row>
            </div>
        )
    }

    componentDidMount(){
        const result = getNewsListData()
        result.then(res =>{
            return res.json()
        }).then(json =>{
            const data = json
            if(data.length){
                this.setState({
                    data:data
                })
            }
        })
    }
}