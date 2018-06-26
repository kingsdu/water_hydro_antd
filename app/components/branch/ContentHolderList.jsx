import React, {Component} from 'react'

import { getBranchInfoDat } from '../../common/fetch'
import ContentTextList from '../../components/branch/ContentTextList'
import { getContentByModule,switchNameByModule,getNewsList } from '../../common/utils'
import PaginationBlock from '../common/PaginationBlock'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'

/**
 * 获取内容部分数据
 * 包括内容列表页面、详情页面和下方的页码页面
 * 列表页面和详情页面需要在一个container中
 */
export default class ContentHolderList extends Component{
    state = {
        data: null,
        startpage:1,
        current:1,
    }

    componentDidMount() {
        const module = this.props.params.module;
        const count = DEFAULT_COUNT;
        const total = this.props.total;
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


    //这个page的回传很6
    pageChange = page => {
        this.setState({
            current: page
        })
        const module = this.props.params.module;
        const start = page;
        const count = DEFAULT_COUNT;
        const result = getContentByModule(start,count,module);
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                }); 
            }     
       })
    }

    render(){
        return(
            <div className='ContentHolderList'>
                <ContentTextList data={this.state.data} categoty={this.props.params.category}/>
                <PaginationBlock current={this.state.current} total={this.props.total} defaultPageSize={DEFAULT_COUNT} onChange={this.pageChange}/>
            </div>
        )
    }

}