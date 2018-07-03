import React,{Component} from 'react'
import { Row, Col, Carousel } from 'antd';
/**
 * 
 * data=[
 * {imageUrl:'1',title:'2',content='3'},
 * {imageUrl:'1',title:'2',content='3'},
 * {imageUrl:'1',title:'2',content='3'}
 * ]
 * 
 * 会员展示模块：会员图片信息和会员介绍和会员详情
 */

const imageCarousel = ({imageUrl}) =>
    <div>
        <img src={imageUrl}/>
    </div>

const contentCarousel = ({title,content,imageUrl}) =>
    <div>
        <Row>
            <Col span={8}>
                <img src={imageUrl}/>
            </Col>
            <Col span={16}>
                <p>{title}</p>
                <p>{content}</p>
            </Col>
        </Row>
    </div>

const CarouselContent = ({data,...props}) =>
    <div className='CarouselContent'>
        <Carousel {...props}>
            {data && data.map(item =>
                item.title?
                contentCarousel(item)
                :
                imageCarousel(item)
            )}   
        </Carousel>  
    </div>   

export default CarouselContent