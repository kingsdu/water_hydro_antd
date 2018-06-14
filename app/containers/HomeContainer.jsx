import React, {Component} from 'react'
import {Card, BackTop, Icon, Col, Row} from 'antd'
import FirstColumn from '../components/home/FirstColumn'
import SecondOneColumn from '../components/home/SecondOneColumn'
import SecondTwoColumn from '../components/home/SecondTwoColumn'
import SecondThreeColumn from '../components/home/SecondThreeColumn'
import SecondFourColumn from '../components/home/SecondFourColumn'
import SecondFiveColumn from '../components/home/SecondFiveColumn'
import ThirdColumn from '../components/home/ThirdColumn'
import FourOneColumn from '../components/home/FourOneColumn'
import FourTwoColumn from '../components/home/FourTwoColumn'

export default class HomeContainer extends Component {
    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <Card className='home'>
                            <FirstColumn/>     
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <Card className='home-2-1'>
                            <SecondOneColumn/>                      
                        </Card>
                        <Card className='home-2-1'>
                            <SecondTwoColumn/>                      
                        </Card>
                        <Card className='home-2-1'>
                            <SecondThreeColumn/>                      
                        </Card>
                    </Col>
                    <Col span={17}>
                        <Card className='home'>
                            <SecondFourColumn/>
                        </Card>
                        <Card className='home'>
                            <SecondFiveColumn/>
                        </Card>
                    </Col>   
                </Row>
                <Row>
                    <Col span={24}>
                        <Card className='home'>
                            <ThirdColumn/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Card className='home-2-1'>
                            <FourOneColumn/>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className='home'>
                            <FourTwoColumn/>
                        </Card>
                    </Col>
                </Row>
                <BackTop>
                    <div className="ant-back-top-inner">
                    <Icon type="arrow-up"/>
                    </div>
                </BackTop>
            </div>
        )
    }
}