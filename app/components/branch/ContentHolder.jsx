import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule } from '../../common/utils'
import { switchNameByModule } from '../../common/utils'

//获取内容部分数据
export default class ContentHolder extends Component{
    state = {
        data: null,
        startpage:1
    }

    componentDidMount() {
        const module = this.props.params.module;
        const count = this.props.count;
        const start = this.state.startpage;
        const data = getContentByModule(start,count,module)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                }); 
            }      
       })
    }

    render(){

        return(
            <div className='ContentHolder'>
                <ContentText contentData={this.state.data}/>
            </div>
        )
    }

}