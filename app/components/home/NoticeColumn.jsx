import React, {Component} from 'react'
import ColumnHeader from './ColumnHeader'
import {Row, Col, Carousel} from 'antd'

import NewsListBlock from '../common/NewsListBlock'
import FirstColumHeader from '../../components/common/FirstColumHead'
import NewsTitCon from '../../components/common/NewsTitCon'

import {getHomeDateByType} from '../../common/utils'
import { HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1 } from '../../config/constant/commonConstant'


export default class NoticeColumn extends Component {
    state = {
        data:null
    }

    componentDidMount(){
        const type = this.props.type;
        const serverType = '1'//暂时无用，但是后台需要该参数占位
        const result = getHomeDateByType(HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1,type,serverType)
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                }); 
            }     
       })
    }

    renderCarousel(){
        const carouselImage = this.state.data&&this.state.data.map(
            item => (
                <div>
                    <img src={item.picture_url}/>
                </div>
            )
        )
        return carouselImage
    }
    
    
    render(){
        const {isMore, title, isCenter, type} = this.props;
        return(
            <div className ='NoticeColumn'>
                <Row>
                    <Col span={9}>
                        <Carousel autoplay={true} dots={false}>
                            {this.renderCarousel()}              
                        </Carousel>          
                    </Col>
                    <Col span={13} offset={1}>
                        <ColumnHeader
                            title={title}
                            type={type}
                            isCenter={isCenter}
                            isMore={isMore}/>
                        <NewsTitCon
                        serverType={'2'}
                        type={'dynamicNews'}/>
                    </Col>
                </Row>               
            </div>
        )
    }
}