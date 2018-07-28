import React, {Component} from 'react'

import {Row, Col} from 'antd'
import ColumnHeader from './ColumnHeader'
import ScienceSliderPic from '../home/ScienceSliderPic'
import VIPShowPic from '../home/VIPShowPic'

const SecondEightColumn = () => {
    return(
        <div className='SecondEightColumn'>
            <Row>
                <Col span={15}>
                    <ColumnHeader
                        title={'会员风采'}
                        type='memberInformation'
                        isMore={true}
                        isCenter={false}/>
                        <VIPShowPic module='memberInformation' serverType='2'/> 
                </Col>
                <Col span={8} offset={1}>
                    <ColumnHeader
                        title={'学会期刊'}
                        type='scientificJournal'
                        isMore={true}
                        isCenter={false}/>
                        <ScienceSliderPic module='scientificJournal' serverType='3'/> 
                </Col>                
            </Row>
        </div>
    )
}

export default SecondEightColumn