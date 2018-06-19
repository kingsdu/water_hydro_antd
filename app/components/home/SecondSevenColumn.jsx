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
                <Col span={8}>
                    <ColumnHeader
                    title={'技术展示'}
                    id={'2'}
                    isMore={true}
                    isCenter={false}/>
                    <PicContent 
                    content={'一种规范化度安徽省水利建设'}
                    imageUrl={'http://i2.bvimg.com/622218/804a1454df9c824b.jpg'}/>
                    <NewsListBlock haveLine={true}/> 
                </Col>
                <Col span={15} offset={1}>
                    <div className='VipShow-out'>
                        <ColumnHeader
                        title='会员风采'
                        id='xhxw'
                        isMore={true}
                        isCenter={false}/>
                        <VipShow/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default SecondSevenColumn