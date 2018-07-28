import React, {Component} from 'react'
import Slider from "react-slick"

/**
 * 首页图片轮播类
 * 使用Slider的Simple方式轮播
 * 传入参数：需要轮播的内容
 */
export default class SimpleSlider extends Component{

    render() {
        const slideData = this.props.data;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
        };
          
        return(
            <div className='SimpleSlider'>
                <Slider {...settings}>
                    {slideData}
                </Slider>
            </div>
        )
    }
}