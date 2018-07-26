import React, {Component} from 'react'
import Slider from "react-slick"


/**
 * 图片模块详情
 */
export default class DigitalPicSet extends Component{
    state = {
        nav1: null,
        nav2: null
    };


    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    renderImg1(){
        const imageViews = this.props.data&&this.props.data.map(
            items =>(
                items.file_path.split('#').map(
                    item => (
                        <div className='swipe_imageDiv_1'>
                            <img src={item} />
                        </div>
                    )
                )
            )
        )
        return imageViews;
    }

    renderImg2(){
        const imageViews = this.props.data&&this.props.data.map(
            items =>(
                items.file_path.split('#').map(
                    item => (
                        <div className='swipe_imageDiv_2'>
                            <img src={item} />
                        </div>
                    )
                )
            )
        )
        return imageViews;
    }


    renderTitle(){
        const title = this.props.data&&this.props.data.map(
            items =>(
                <p className='title'>
                    {items.title}
                </p>
            )
        )
        return title;
    }


    renderTag(){
        const tag = 
        <p>
            数字资料>会议图集
        </p>
        return tag
    }


    render(){
        return(
            <div className='swipe_out_div'>
                {this.renderTag()}
                {this.renderTitle()}
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}>
                     {this.renderImg1()}
                    </Slider>
                    <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}>
                     {this.renderImg2()}
                </Slider>       
            </div>              
        )
    }
}


