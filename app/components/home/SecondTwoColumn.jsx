import React, {Component} from 'react'

import BranchIntro from './BranchIntro'
import ColumnHeader from './ColumnHeader'
import PredictionActivity from '../home/PredictionActivity'

const SecondTwoColumn = () =>{
    return(
        <div>
           <PredictionActivity
           title='会议通知'
           type='notices'
           serverType='1'
           isMore={false}
           isCenter={true}
           haveLine={true}
           />
        </div>
    )
}

export default SecondTwoColumn