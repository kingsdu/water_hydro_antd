import React, {Component} from 'react'
import {Card, BackTop, Icon, Col, Row} from 'antd'
import FirstColumn from '../components/home/FirstColumn'
import SecondOneColumn from '../components/home/SecondOneColumn'
import SecondTwoColumn from '../components/home/SecondTwoColumn'
import SecondThreeColumn from '../components/home/SecondThreeColumn'
import SecondFourColumn from '../components/home/SecondFourColumn'
import SecondFiveColumn from '../components/home/SecondFiveColumn'
import SecondSixColumn from '../components/home/SecondSixColumn'
import SecondSevenColumn from '../components/home/SecondSevenColumn'
import SecondEightColumn from '../components/home/SecondEightColumn'
import ThirdColumn from '../components/home/ThirdColumn'
import FourOneColumn from '../components/home/FourOneColumn'
import FourTwoColumn from '../components/home/FourTwoColumn'

export default class HomeContainer extends Component {
    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <Card className='home-1'>
                            <FirstColumn/>     
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <Card className='home-2-1'>
                            <SecondOneColumn/>                      
                        </Card>
                        <Card className='home-2-2'>
                            <SecondTwoColumn/>                      
                        </Card>
                        <Card className='home-2-3'>
                            <SecondThreeColumn/>                      
                        </Card>
                        <Card className='home-2-4'>
                            <SecondFourColumn/>                 
                        </Card>
                    </Col>
                    <Col span={17}>
                        <Card className='home-2-5'>
                            <SecondFiveColumn/>
                        </Card>
                        <Card className='home-2-6'>
                            <SecondSixColumn/>
                        </Card>
                        <Card className='home-2-7'>
                            <SecondSevenColumn/>
                        </Card>
                        <Card className='home-2-8'>
                            <SecondEightColumn/>
                        </Card>
                    </Col>   
                </Row>
                <Row>
                    <Col span={24}>
                        <Card className='home-4-1'>
                            <FourOneColumn/>
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