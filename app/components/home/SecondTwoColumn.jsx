import React, {Component} from 'react'

import BranchIntro from './BranchIntro'
import ColumnHeader from './ColumnHeader'
import PredictionActivity from '../home/PredictionActivity'

const SecondTwoColumn = () =>{
    return(
        <div>
           <PredictionActivity
           title='活动预告'
           type='notices'
           serverType='8'
           isMore={false}
           isCenter={true}
           haveLine={true}
           />
        </div>
    )
}

export default SecondTwoColumn