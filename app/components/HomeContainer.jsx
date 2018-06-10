import React, {Component} from 'react'
import {Card, BackTop, Icon, Col, Row} from 'antd'
import FirstColumn from '../components/FirstColumn/FirstColumn'
import SecondColumn from '../components/SecondColumn'

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
                            <SecondColumn/>
                            <SecondColumn/>
                            <SecondColumn/>
                        </Card>
                    </Col>
                    <Col span={17}>
                        <Card className='home'>
                            <SecondColumn/>
                            <SecondColumn/>
                        </Card>
                        <Card className='home'>
                            <SecondColumn/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card className='home'>
                            <SecondColumn/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}