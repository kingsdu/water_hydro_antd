import React, {Component} from 'react'

import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule,switchNameByModule,getMenuDetailByModule } from '../../common/utils'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'


//获取内容部分数据
export default class ContentHolder extends Component{
    state = {
        data: null,
    }

    componentDidMount() {
        const module = this.props.module;
        const count = DEFAULT_COUNT;
        const start = DEFAULT_START;
        const data = getContentByModule(start,count,module)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    // componentWillReceiveProps(nextProps) {
    //     const module = nextProps.params.module
    //     const menuType = getMenuDetailByModule(module)
    //     if(menuType == 'NoList'){
    //         if(module !== this.props.params.module){
    //             const count = DEFAULT_COUNT;
    //             const start = DEFAULT_START;
    //             const result = getContentByModule(start,count,module)
    //             result.then((data)=>{
    //                 if(data.Result == 'success'){
    //                     this.setState({
    //                         data: data.Data
    //                     }); 
    //                 }      
    //             })
    //         }
    //     }
    // }

    render(){
        return(
            <div className='ContentHolder'>
                <ContentText contentData={this.state.data}/>
            </div>
        )
    }

}