import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule,getDataByServerID } from '../../common/utils'


//根据id取新闻
export default class ContentDetails extends Component{
    state = {
        data:null,
    }

    componentDidMount(){
        const id = this.props.params.module;
        const route = 'allInfo/getInfoById'
        const result = getDataByServerID(route,id)
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            } 
        })
    }

    render(){
        return(
            <div className='ContentDetails'>
                <ContentText contentData={this.state.data}/>
            </div>
        )
    }
}