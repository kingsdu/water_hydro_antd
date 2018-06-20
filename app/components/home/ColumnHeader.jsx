import React from 'react'
import {Link} from 'react-router'
import {Row, Col} from 'antd'


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
            <span className='column_header_span'><img src='http://i4.bvimg.com/622218/4d21c54fa9e718df.jpg'/></span>
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