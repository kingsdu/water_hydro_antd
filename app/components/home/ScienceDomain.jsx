import React, {Component} from 'react'
import {Row, Col} from 'antd'

export default class ScienceDomain extends Component{
    render(){
        return(
            <div className='ScienceDomain'>
               <Row>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/788658c85f6b0c3c.jpg'/>
                        <p style={{marginLeft:'5px'}}>节水</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/02bc9cb9d40912f7.jpg'/>
                        <p>水资源</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/e66a4ad45b709834.jpg'/>
                        <p>水环境</p>
                   </Col>     
                </Row> 
                <Row>
                    <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/32bdf0621d732a88.jpg'/>
                        <p>南水北调</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/ac596bd4045d901e.jpg'/>
                        <p style={{marginLeft:'8px'}}>集雨</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/a19d2e2ef3bbdbff.jpg'/>
                        <p>三峡工程</p>
                   </Col>
                </Row> 
                <Row >
                    <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/f9841710729fa8e9.jpg'/>
                        <p>城市水利</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/c7b465ccdfff5f51.jpg'/>
                        <p>流域治理</p>
                   </Col>
                   <Col span={8}>
                        <img src='http://i4.bvimg.com/622218/925d5431bc1ca6c0.jpg'/>
                        <p>淤堤坝</p>
                   </Col>
                </Row> 
            </div>
        )
    }
}
