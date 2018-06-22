import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'antd'
import { getHomeTarget } from "../../common/utils";

const ColumnHeader = ({title,type,isMore,isCenter}) => {
    const more = 'more'
    const route = getHomeTarget(type);
    return (
        isCenter ? 
        <div className='column_header_center'>
            <span className='column_title'>
                    {title}
            </span>           
            <span className='column_more'>
                {
                    isMore ?
                    <Link to={route}>more</Link>
                    :
                    ''
                }
            </span>
        </div>
        :
        <div className='column_header'>
            <span className='column_header_span'><img src='http://i4.bvimg.com/622218/4d21c54fa9e718df.jpg'/></span>
            <span className='column_title'>
                    {title}
            </span>             
            <span className='column_more'>
                {
                    isMore ?
                    <Link to={route}>
                        more
                    </Link>
                    :
                    ''
                }
            </span>
        </div>
    )
}

export default ColumnHeader