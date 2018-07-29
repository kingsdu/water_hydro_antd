import React, {Component} from 'react'
import {getHomeDateByType} from '../../common/utils'
import { HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1 } from '../../config/constant/commonConstant'
import {Row, Col} from 'antd'
import SimpleSlider from '../home/SimpleSlider'
//import {Link} from 'react-router-dom'


/**
 * 会员风采轮播图片功能
 */
 export default class VIPShowPic extends Component{
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
                <Row>
                    <Col span={11}>
                        <img src={item.avatar_path}/>
                    </Col>
                    <Col span={10}>
                        <p className='title'>{item.name}</p>
                        <p className='intro'>{item.jobTitle}</p>
                    </Col>
                </Row>
            )
        )
        return sliderData
    }



    render(){
        return(
            <div className = 'vipshow_div'>
                <SimpleSlider data={this.renderSlideBlock()}/>
            </div>
        )
    }
 }
