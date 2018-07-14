import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class ScienceDomain extends Component{
    render(){
        return(
            <div className='ScienceDomain'>
               <Row>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841487x-1404817497.jpg'/>
                        <p style={{marginLeft:'5px'}}>节水</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841512x-1404817497.jpg'/>
                        <p>水资源</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841536x-1404817497.jpg'/>
                        <p>水环境</p>
                   </Col>     
                </Row> 
                <Row>
                    <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841562x-1404817497.jpg'/>
                        <p>南水北调</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841590x-1404817497.jpg'/>
                        <p style={{marginLeft:'8px'}}>集雨</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841619x-1404817497.jpg'/>
                        <p>三峡工程</p>
                   </Col>
                </Row> 
                <Row >
                    <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841512x-1404817497.jpg'/>
                        <p>城市水利</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841562x-1404817497.jpg'/>
                        <p>流域治理</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://chuantu.biz/t6/339/1530841487x-1404817497.jpg'/>
                        <p>淤堤坝</p>
                   </Col>
                </Row> 
            </div>
        )
    }
}
