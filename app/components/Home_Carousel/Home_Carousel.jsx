import React,{Component} from 'react'
import {Carousel,Col, Row} from 'antd'
import CarouselContent from '../../components/Home_Carousel/CarouselContent'
import { CarouselData } from '../../config/constant/MockData/CarouselData'
/**
 * 公共组件：轮播图片组件
 * vertical：轮播方向
 * dots：是否显示轮播点
 * autoplay：是否自动轮播
 * haveContent：是否需要传入内容
 */
export default class Home_Carousel extends Component{
    state={
        data:null,
    }

    render(){
        const {vertical,dots,autoplay} = this.props    
        return(
            <div className='Home_Carousel'>
                <CarouselContent 
                data={this.state.data}
                vertical={vertical} 
                dots={dots}
                autoplay={autoplay}
                />
            </div>
        )
    }


    componentDidMount(){
        const type = this.props
        this.setState({
            data:CarouselData
        })
    }

    

}
