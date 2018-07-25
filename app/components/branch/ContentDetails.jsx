import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule,getDataByServerID,getDetailRouteByCategory } from '../../common/utils'


//根据id取新闻
export default class ContentDetails extends Component{
    state = {
        data:null,
    }

    componentDidMount(){
        const {category,module} = this.props.match.params;
        const route = getDetailRouteByCategory(category)
        const result = getDataByServerID(route,module)
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