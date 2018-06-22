import React, {Component} from 'react'
import {Row, Col} from 'antd'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'

export default class HotNotice extends Component{
    render(){
        const {isMore, isCenter, type, title ,haveLine} = this.props;
        return(
            <div className='HotNotice'>
                <ColumnHeader
                type={type}
                title={title}
                isMore={isMore}
                isCenter={isCenter}/>
                <NewsListBlock type={type} count={5} haveLine={haveLine}/> 
            </div>
        )
    }
}

