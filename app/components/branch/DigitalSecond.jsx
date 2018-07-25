import React, {Component} from 'react'

import { getBranchInfoDat } from '../../common/fetch'
import DigtaSecondlTextList from '../../components/branch/DigtaSecondlTextList'
import { getContentByModule,switchNameByModule,getDigtialSecondData } from '../../common/utils'
import PaginationBlock from '../common/PaginationBlock'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'

/**
 * 数字资料第二层
 */
export default class DigitalSecond extends Component{
    state = {
        data: null,
        start:DEFAULT_START,
        count:DEFAULT_COUNT,
        current:1
    }

    componentDidMount(){
        const{id,type} = this.props;
        const data = getDigtialSecondData(id,type,this.state.start,this.state.count)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    componentWillReceiveProps(nextProps){
        const id = nextProps.id
        if(module !== this.props.id){
            const{id,type} = this.props;
            const data = getDigtialSecondData(id,type,this.state.start,this.state.count)
            data.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data
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
        const{id,type} = this.props;
        const start = page;
        const count = DEFAULT_COUNT;
        const data = getDigtialSecondData(id,type,this.state.start,this.state.count)
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
                <DigtaSecondlTextList data={this.state.data} type={this.props.type}/>
                <PaginationBlock current={this.state.current} total={this.props.total} defaultPageSize={DEFAULT_COUNT} onChange={this.pageChange}/>
            </div>
        )
    }

}