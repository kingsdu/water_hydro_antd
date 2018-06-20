import React, {Component} from 'react'
import ColumnHeader from './ColumnHeader'
import {Row, Col, Carousel} from 'antd'

import NewsListBlock from '../common/NewsListBlock'
import FirstColumHeader from '../../components/common/FirstColumHead'
import NewsTitCon from '../../components/common/NewsTitCon'

export default class NoticeColumn extends Component {
    render(){
        const {isMore, title, id} = this.props;
        return(
            <div className ='NoticeColumn'>
                <Row>
                    <Col span={9} className='Col-2'>
                        <Carousel autoplay={true} vertical={true} dots={true}>
                            <div>
                                <img src='http://i2.bvimg.com/622218/afdf320e83826001.jpg'/>
                            </div>
                            <div>
                                <img src='http://i2.bvimg.com/622218/390c5516e1e9edbf.jpg'/>
                            </div>
                            <div>
                                <img src='http://i2.bvimg.com/622218/2e9c109744f794c4.jpg'/>
                            </div>                           
                        </Carousel>          
                    </Col>
                    <Col span={13} offset={1}>
                        <ColumnHeader
                            title={title}
                            id={id}
                            isMore={isMore}/>
                        <NewsTitCon/>
                    </Col>
                </Row>               
            </div>
        )
    }
}