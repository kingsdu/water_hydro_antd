import React, {Component} from 'react'

import BranchIntro from './BranchIntro'
import ColumnHeader from '../components/ColumnHeader'

const SecondTwoColumn = () =>{
    return(
        <div>
            <ColumnHeader
            title='分会简介'
            isMore={false}
            isCenter={true}/>
            <BranchIntro/>
        </div>
    )
}

export default SecondTwoColumn