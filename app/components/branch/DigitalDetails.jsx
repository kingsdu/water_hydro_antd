import React, {Component} from 'react'

import DigitalPicSet from './DigitalPicSet'
import DigitalWordSet from './DigitalWordSet'
import DigitalVideoSet from './DigitalVideoSet'
import { getBranchInfoData } from '../../common/fetch'
import ContentText from '../../components/branch/ContentText'
import { getContentByModule,getDataByServerID,getDetailRouteByCategory } from '../../common/utils'

export default class DigitalDetails extends Component{
    state = {
        data:null,
    }

    componentDidMount(){
        const {type,id} = this.props.match.params;
        const route = 'digital/getDigitalDetailById';
        const result = getDataByServerID(route,id)
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data
                }); 
            } 
        })
    }

    //有图片集和视频集、文档集两种布局
    render(){
        const type = this.props.match.params.type;
        //图片集
        if(type == '1'){
            return(
                <div>
                    <DigitalPicSet data={this.state.data}/>
                </div>
            )
        }else if(type == '2'){
            //文档集
            return(
                <div>
                    <DigitalWordSet data={this.state.data}/>
                </div>
            )
        }else if(type == '3'){
            //视频集
            return(
                <div>
                    <DigitalVideoSet data={this.state.data}/>
                </div>
            )
        }
    }

}