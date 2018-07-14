import React, {Component} from 'react'

import ColumnHeader from './ColumnHeader'
import HotNotice from './HotNotice'
import BranchIntro from './BranchIntro'

const SecondOneColumn = () =>{
    return (
        <div>
            <HotNotice
            title='热点公告'
            type='eventsNotice'
            serverType='5'
            isMore={false}
            isCenter={true}
            haveLine={true}
            />
        </div>
    )
}


export default SecondOneColumn