import React,{Component} from 'react'


/**
 * 
 * 数据为需要轮播的imageUrl的数组
 */
const CarouselPic = ({data})=> {
    data&&data.map(item =>(
        <div>
            <img src={item.imageUrl}/>
        </div>
    ))
}
export default CarouselPic