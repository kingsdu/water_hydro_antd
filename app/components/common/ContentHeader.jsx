import React from 'react'
import {Icon, Col, Row} from 'antd'

const ContentHeader = ({title}) => {
    const c_title = "关于分会";
    let c_subTitle = "";
    switch(title){
        case 'brachInfo' : c_subTitle="分会介绍"
        break;
        case 'OrganizationStr' : c_subTitle="组织结构"
        break;
        default: c_subTitle = "分会章程"
        break;
    }

    return(
        <div className='ContentHeader'>
            <span className='span-left'>{c_subTitle}</span>
            <span className='span-right'>{c_title}<Icon type="right" />{c_subTitle}</span>
        </div>
    )
}

export default ContentHeader