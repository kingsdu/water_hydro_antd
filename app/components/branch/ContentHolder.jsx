import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule,switchNameByModule,getMenuDetailByModule} from '../../common/utils'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'

/**
 * 直接详情页
 */
export default class ContentHolder extends Component{
    state = {
        data: null,
        count:DEFAULT_COUNT,
        start:DEFAULT_START,
    }

    componentDidMount() {
        const module = this.props.module;
        const data = getContentByModule(this.state.start,this.state.count,module)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    /**
     * 判断上一次的props和本次的nextProps
     * 不同则获取数据，重新render页面
     */
    componentWillReceiveProps(nextProps) {
        const module = nextProps.module
        if(module !== this.props.module){
            const data = getContentByModule(this.state.start,this.state.count,module)
            data.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data
                    }); 
                }      
           })
        }
    }

    render(){
        return(
            <div className='ContentHolder'>
                <ContentText contentData={this.state.data}/>
            </div>
        )
    }

}