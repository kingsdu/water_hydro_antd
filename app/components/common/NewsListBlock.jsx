import React, {Component} from 'react'

import {getHomeDateByType} from '../../common/fetch'
import NewsList from './NewsList'

export default class NewsListBlock extends Component {
    state = {
        data: null,
        startPage: 1,
    }

    componentDidMount() {
        const { startPage} = this.state;
        const { type,count,serverType } = this.props;
        const data = getHomeDateByType(startPage,count,type,serverType)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                }); 
            }      
       })
    }

    render() {
        const {haveLine} = this.props;
        return(
            <div>
                {<NewsList newsData={this.state.data} haveLine={haveLine}/>}
            </div>
        )
    }
}