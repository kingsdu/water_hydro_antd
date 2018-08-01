import React, {Component} from 'react'
import {Col, Row} from 'antd'
import MemberShowHolder from '../branch/MemberShowHolder'
import { getContentByModule,switchNameByModule,getNewsList } from '../../common/utils'
import PaginationBlock from '../common/PaginationBlock'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'

/**
 * 展示图片的部分
 */

export default class ContentPicHolder extends Component{
    state = {
        data: null,
        start:DEFAULT_START,
        count:DEFAULT_COUNT,
        current:1
    }


    componentDidMount() {
        const module = this.props.module;
        const data = getContentByModule(this.state.start,5,module)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }


    componentWillReceiveProps(nextProps) {
        const module = nextProps.module
        if(module !== this.props.module){
            const data = getContentByModule(this.state.start,5,module)
            data.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data,
                        current:1
                    }); 
                }      
           })
        }
    }



    //这个page的回传
    pageChange = page => {
        this.setState({
            current: page
        })
        const module = this.props.module;
        const start = (page-1)*5;
        const count = DEFAULT_COUNT;
        const result = getContentByModule(start,5,module);
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
                <MemberShowHolder data={this.state.data}/>
                <PaginationBlock current={this.state.current} total={this.props.total} defaultPageSize={5} onChange={this.pageChange}/>
            </div>
        )
    }

}