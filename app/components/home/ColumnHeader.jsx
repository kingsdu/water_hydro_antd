import React from 'react'
import {Link} from 'react-router-dom'
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
                    <Link to={route} target="_Blank">more</Link>
                    :
                    ""
                }
            </span>
        </div>
        :
        <div className='column_header'>
            <span className='column_header_span'><img src='http://chuantu.biz/t6/339/1530841197x-1404817497.jpg'/></span>
            <span className='column_title'>
                    {title}
            </span>             
            <span className='column_more'>
                {
                    isMore ?
                    <Link to={route}  target="_Blank">
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