import React, {Component} from 'react'


//首页切换大图
const SliderPic = ({imageUrl}) => {
    return(
        <div className='SliderPic'>
            <img src={imageUrl}/>
        </div>
    )
}

export default SliderPic