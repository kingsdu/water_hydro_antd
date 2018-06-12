import React, {Component} from 'react'
import ColumnHeader from './ColumnHeader'

import MemberServiceDetail from './MemberServiceDetail'

export default class MemberService extends Component {
    render(){
        const {type, isMore, total, title, id} = this.props;
        return(
            <div>
                <ColumnHeader
                 title={title}
                 id={id}
                 isMore={isMore}>             
                </ColumnHeader>
                <MemberServiceDetail/>
            </div>
        )
    }
}