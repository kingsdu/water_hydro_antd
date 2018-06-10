import React, {Component} from 'react'
import ColumnHeader from '../ColumnHeader'

import NewsListBlock from '../NewsListBlock'

export default class NoticeColumn extends Component {
    render(){
        const {type, isMore, total, title, id} = this.props;
        return(
            <div>
                <ColumnHeader
                 title={title}
                 id={id}
                 isMore={isMore}/>
                <NewsListBlock
                type='guonei'
                count={5}/>
            </div>
        )
    }
    


}