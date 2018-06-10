import React, {Component} from 'react'
import ColumnHeader from '../ColumnHeader'

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
                <div className='member-pic'>
                    <img className='pic-top' src="http://i1.bvimg.com/622218/3ff94b8ee535a465.png"/>
                    <img src="http://i1.bvimg.com/622218/22dff406a6756150.png"/>
                </div>
            </div>
        )
    }
}