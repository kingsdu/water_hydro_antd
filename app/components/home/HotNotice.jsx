import React, {Component} from 'react'

import ColumnHeader from './ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'

export default class HotNotice extends Component{
    render(){
        const {isMore, isCenter, type, title ,haveLine ,serverType} = this.props;
        return(
            <div className='HotNotice'>
                <ColumnHeader
                type={type}
                title={title}
                isMore={isMore}
                isCenter={isCenter}/>
                <NewsListBlock type={type} count={5} haveLine={haveLine} serverType={serverType}/> 
            </div>
        )
    }
}

