import React, {Component} from 'react'

import ColumnHeader from './ColumnHeader'
import HotNotice from './HotNotice'
import BranchIntro from './BranchIntro'

const SecondOneColumn = () =>{
    return (
        <div>
            <HotNotice
            title='通知公告'
            type='eventsNotice'
            serverType='1'
            count='6'
            isMore={false}
            isCenter={true}
            haveLine={true}
            />
        </div>
    )
}


export default SecondOneColumn