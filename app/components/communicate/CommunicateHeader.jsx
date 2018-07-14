import React from 'react'
import {Icon} from 'antd'

const CommunicateHeader = ({title}) => {
    const c_title = "学术交流";
    let c_subTitle = "";
    switch(title){
        case 'dynamicsWork' : c_subTitle="工作动态"
        break;
        case 'eventsNotice' : c_subTitle="活动公告"
        break;
        case 'notices' : c_subTitle="通知"
        break;
        case 'skillDynamics' : c_subTitle="技术动态"
        break;
        default: c_subTitle = "工作动态"
        break;
    }

    return(
        <div className='ContentHeader'>
            <span className='span-left'>{c_subTitle}</span>
            <span className='span-right'>{c_title}<Icon type="right" />{c_subTitle}</span>
        </div>
    )
}

export default CommunicateHeader