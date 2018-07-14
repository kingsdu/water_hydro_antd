import React from 'react'

import ColumnHeader from '../home/ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import PredictionAtyHeader from '../home/PredictionAtyHeader'

//活动预告
const PredictionActivity = ({title,type,serverType}) => {
    return(
        <div className='PredictionActivity'>
            <PredictionAtyHeader
            title={title}/>
            <NewsListBlock haveLine={true} count={5} type={type} serverType={serverType}/> 
        </div>
    )
}

export default PredictionActivity