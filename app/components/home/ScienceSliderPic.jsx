import React, {Component}from 'react'
import {getHomeDateByType} from '../../common/utils'
import { HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1 } from '../../config/constant/commonConstant'
import {Row, Col} from 'antd'
import SimpleSlider from '../home/SimpleSlider'


/**
 * 首页图片轮播控件
 * 根据type区分会员风采和期刊两种类型的轮播内容
 * 1 会员风采;2 期刊;
 */
export default class ScienceSliderPic extends Component{
    state={
        date:null,
    }

    componentDidMount(){
        const {module,serverType} = this.props;
        const data = getHomeDateByType(HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1,module,serverType);
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                }); 
            }      
       });
    }

    renderSlideBlock(){
        const sliderData = this.state.data&&this.state.data.map(
            item =>(
                <div>
                    <img src={item.picture_url}/>
                    <p>{item.title}</p>
                </div>
            )
        )
        return sliderData
    }



    render(){
        return(
            <div className='ScienceSlider_div'>
                 <SimpleSlider data={this.renderSlideBlock()}/>
            </div>
        )
    }
}