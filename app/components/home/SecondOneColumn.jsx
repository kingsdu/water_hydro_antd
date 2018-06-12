import React, {Component} from 'react'

import ColumnHeader from './ColumnHeader'
import HotNotice from './HotNotice'
import BranchIntro from './BranchIntro'

const SecondOneColumn = () =>{
    return (
        <div>
            <HotNotice
            id='notice'
            title='热点公告'
            type='in_notices'
            iconType='2'
            isMore={false}
            isCenter={true}
            />
        </div>
    )
}


export default SecondOneColumn