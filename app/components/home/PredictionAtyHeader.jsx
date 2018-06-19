import React from 'react'
import {Row, Col} from 'antd'

//活动预告头部

const PredictionAtyHeader = ({title}) => {
    return(
        <div className ='PredictionAtyHeader'>
            <p>{title}</p>
        </div>
    )
}

export default PredictionAtyHeader