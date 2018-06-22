import React from 'react'
import {Row, Col} from 'antd'

import ColumnHeader from '../home/ColumnHeader'
import NewsListBlock from '../common/NewsListBlock'
import PredictionAtyHeader from '../home/PredictionAtyHeader'

//活动预告
const PredictionActivity = ({title,isCenter,type}) => {
    return(
        <div className='PredictionActivity'>
            <PredictionAtyHeader
            title={title}/>
            <NewsListBlock haveLine={true}  count={5} type={type}/> 
        </div>
    )
}

export default PredictionActivity