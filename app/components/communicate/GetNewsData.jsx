import React, {Component} from 'react'
import { getNewsDetailsData } from '../../common/fetch'

import NewsDetails from '../common/NewsDetail'
import ContentText from '../../components/branch/ContentText'

export default class GetNewsData extends Component{
    state = {
        data: null
    }


    componentDidMount(){
        const result = getNewsDetailsData(id)
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


    render(){
        const id = this.props.params.id

        return(
            <ContentText contentData={this.state.data}/>
        )     
    }
    
}