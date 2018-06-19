import React, {Component} from 'react'
import {Row, Col} from 'antd'

import BranchIntro from './BranchIntro'
import ColumnHeader from './ColumnHeader'

const SecondThreeColumn = () =>{
    return(
        <div className='SecondThreeColumn'>
            <div className='columnHeader-div'>
                <ColumnHeader
                title='分会简介'
                isMore={true}
                isCenter={false}/>
            </div>
            <BranchIntro/>
        </div>
    )
}

export default SecondThreeColumn