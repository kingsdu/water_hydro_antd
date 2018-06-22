import React, {Component} from 'react'
import {Row, Col} from 'antd'

import BranchIntro from './BranchIntro'

const SecondThreeColumn = () =>{
    return(
        <div className='SecondThreeColumn'>
            <BranchIntro
             title='分会简介'
             type='BranchIntro'
             isMore={true}
             isCenter={false}
             haveLine={true}/>
        </div>
    )
}

export default SecondThreeColumn