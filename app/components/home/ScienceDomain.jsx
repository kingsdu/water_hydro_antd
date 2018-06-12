import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class ScienceDomain extends Component{
    render(){
        return(
            <div className='ScienceDomain'>
               <Row className='ScienceDomain-row-1'>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/957e828d717602b3.png'/>
                        <p>水资源</p>
                   </Col>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/3afcb53266a0e884.png'/>
                        <p>节水</p>
                   </Col>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/1661de0096f1610b.png'/>
                        <p>水环境</p>
                   </Col>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/957e828d717602b3.png'/>
                        <p>集雨</p>
                   </Col>      
                </Row> 
                <Row className='ScienceDomain-row-2'>
                    <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/957e828d717602b3.png'/>
                        <p>水资源</p>
                   </Col>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/3afcb53266a0e884.png'/>
                        <p>节水</p>
                   </Col>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/1661de0096f1610b.png'/>
                        <p>水环境</p>
                   </Col>
                   <Col span={5} offset={1}>
                        <img src='http://i4.bvimg.com/622218/957e828d717602b3.png'/>
                        <p>集雨</p>
                   </Col>
                </Row> 
            </div>
        )
    }
}
