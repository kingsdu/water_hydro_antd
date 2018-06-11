import React, {Component} from 'react'

import ColumnHeader from '../components/ColumnHeader'
import HotNotice from '../components/HotNotice'
import BranchIntro from '../components/BranchIntro'

const SecondOneColumn = () =>{
    return (
        <div>
            <HotNotice
            id='notice'
            title='热点公告'
            type='in_notices'
            isMore={false}
            isCenter={true}/>
        </div>
    )
}


export default SecondOneColumn