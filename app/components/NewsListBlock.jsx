import React, {Component} from 'react'

import {getNewsData} from '../common/fetch'
import NewsList from '../components/NewsList'

import Loading from './Loading'

export default class NewsListBlock extends Component {
    state = {
        data: null,
        isLoading: false
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        const result = getNewsData()
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

    render() {
        const {isLoading} = this.state.isLoading;
        return(
            <div>
                {isLoading ? <Loading /> : <NewsList newsData={this.state.data}/>}
            </div>
        )
    }
}