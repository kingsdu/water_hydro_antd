import React from 'react'
import {Link} from 'react-router'


const ColumnHeader = ({title,id,target,total,onChange,current,isMore,isCenter}) => {
    const more = 'more'
    return (
        isCenter ? 
        <div className='column_header_center'>
            <span className='column_title' id={id}>
                    <Link to={target}>{title}</Link>
            </span>           
            <span className='column_more'>
                {
                    isMore ?
                    more :
                    ''
                }
            </span>
        </div>
        :
        <div className='column_header'>
            <span className='column_title' id={id}>
                    <Link to={target}>{title}</Link>
            </span>           
            <span className='column_more'>
                {
                    isMore ?
                    more :
                    ''
                }
            </span>
        </div>
    )
}

export default ColumnHeader