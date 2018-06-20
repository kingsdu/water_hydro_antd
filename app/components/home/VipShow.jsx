import React, {Component} from 'react'
import {Row, Col, Carousel} from 'antd'

export default class VipShow extends Component{
    render(){
        return(
            <div className='vipshow'>
                <Carousel 
                autoplay={true}
                dots={false}>
                    <div>
                        <Row>
                            <Col span={8}>
                                <img src="http://i1.bvimg.com/622218/c7c2cfb958fecdf9.jpg"/>
                            </Col>
                            <Col span={14} offset={1}>
                                <p className='name-p'>王毅</p>
                                <p>男，汉族，1953年10月生，北京市人，1969年9月参加工作，1981年5月加入中国共产党，北京第二外国语学院亚非语系日语专业毕业，大学学历，经济学硕士学位。</p>
                            </Col>
                        </Row>
                        <p className='bottom-p'></p>
                    </div>
                   <div>
                        <Row>
                            <Col span={8}>
                                <img src="http://i2.bvimg.com/622218/983c89f04c658f3b.png"/>
                            </Col>
                            <Col span={14} offset={1}>
                                <p className='name-p'>张建清</p>
                                <p>浙江金华人，1988年毕业于成都地质学院，2002年获河海大学工程硕士。现任长江设计院物探检测公司经理、教授级高级工程师，注册土木工程师。</p>
                            </Col>
                        </Row>
                        <p className='bottom-p'></p>
                   </div>
                </Carousel>
            </div>
        )
    }
}