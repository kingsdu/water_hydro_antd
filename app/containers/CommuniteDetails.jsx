import React, { Component } from 'react';
import {Layout, Card, Icon, Row} from 'antd'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import { getNewsDetailsData } from '../common/fetch'
import ContentText  from '../components/branch/ContentText'

export default class CommuniteDetails extends Component {
    state = {
        data: false,
    }

    render(){
        return(
            <div>
                <Header/>
                    <div className='wrap center'>
                        {
                            this.state.data
                            ? <Card><ContentText contentData={this.state.data}/></Card>
                            : ''
                        }
                    </div>
                <Footer />  
            </div>
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const result = getNewsDetailsData(id)
        result.then(res => {
            return res.json()
        }).then(json =>{
            this.setState({
                data: json
            })
        }).catch(ex => {
            if(__DEV__){
                console.error('获取信息出错')
            }
        })
    }

}
