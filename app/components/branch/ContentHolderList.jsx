import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentTextList from '../../components/branch/ContentTextList'
import { getContentByModule,switchNameByModule } from '../../common/utils'

//获取内容部分数据
export default class ContentHolderList extends Component{
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
                    data: data.Data
                }); 
            }      
       })
    }


    componentDidUpdate(){
        const module = this.props.params.module;
        const count = this.props.count;
        const start = this.state.startpage;
        const data = getContentByModule(start,count,module)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    render(){
        return(
            <div className='ContentHolderList'>
                <ContentTextList data={this.state.data} categoty={this.props.params.category}/>
            </div>
        )
    }

}