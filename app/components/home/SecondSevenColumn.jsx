import React, {Component} from 'react'

import {Row, Col} from 'antd'
import VipShow from './VipShow'
import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import PicContent from '../home/PicContent'


const SecondSevenColumn = () => {
    return(
        <div className='SecondSevenColumn'>
            <Row>
                <Col span={7}>
                    <ColumnHeader
                    title={'技术展示'}
                    type={'skillShow'}
                    isMore={true}
                    isCenter={false}/>
                    <PicContent
                    type={'skillShow'}
                    content={'一种规范化度安徽省水利建设'}
                    imageUrl={'http://i2.bvimg.com/622218/804a1454df9c824b.jpg'}
                    serverType='6'/>
                    <NewsListBlock haveLine={true} count={4} type={'skillShow'}  serverType='6'/> 
                </Col>
                <Col span={16} offset={1}>
                    <div className='VipShow-out'>
                        <ColumnHeader
                        title='会员风采'
                        isMore={true}
                        isCenter={false}/>
                        <VipShow/>
                    </div>
                </Col>
            </Row>
            <div>
                
            </div>
        </div>
    )
}
export default SecondSevenColumn