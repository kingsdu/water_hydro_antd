import React, {Component} from 'react'
import {Card, BackTop, Icon, Col, Row} from 'antd'
import FirstColumn from '../components/FirstColumn/FirstColumn'
import SecondOneColumn from '../components/SecondOneColumn'
import SecondTwoColumn from '../components/SecondTwoColumn'
import SecondThreeColumn from '../components/SecondThreeColumn'
import ThirdColumn from '../components/ThirdColumn'
import FourOneColumn from '../components/FourOneColumn'
import FourTwoColumn from '../components/FourTwoColumn'

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
                    </Col>
                    <Col span={17}>
                        <Card className='home'>
                            <SecondThreeColumn/>
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
            </div>
        )
    }
}