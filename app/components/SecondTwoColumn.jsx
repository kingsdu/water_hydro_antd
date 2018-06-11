import React, {Component} from 'react'

import BranchIntro from './BranchIntro'

const SecondTwoColumn = () =>{
    return(
        <div>
            <BranchIntro
            id='notice'
            title='公会简介'
            type='in_notices'
            isMore={false}
            isCenter={true}/>
        </div>
    )
}

export default SecondTwoColumn