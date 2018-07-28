import React, {Component} from 'react'

import {getHomeDateByType} from '../../common/utils'
import { HOME_DEFAULT_START } from '../../config/constant/commonConstant'
import NewsList from './NewsList'

export default class NewsListBlock extends Component {
    state = {
        data: null,
    }

    componentDidMount() {
        const { type,serverType,count } = this.props;
        const data = getHomeDateByType(HOME_DEFAULT_START,count,type,serverType)
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
                <NewsList newsData={this.state.data} haveLine={haveLine} type={this.props.type}/>
            </div>
        )
    }
}