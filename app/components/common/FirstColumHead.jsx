import React from 'react'
import {Row, Col} from 'antd'

const FirstColumHeader = ({params}) => {
    return (
        <div className='FirstColumHeader'>    
            <Row>
                <Col span={9} offset={1}>
                    <img src='http://i1.bvimg.com/622218/7aae04adb3829edd.png'/>
                </Col>
                <Col span={3} offset={1}>
                    <p>{params}</p>
                </Col>
                <Col span={10}>
                    <img src='http://i1.bvimg.com/622218/7aae04adb3829edd.png'/>
                </Col>
            </Row>
        </div>
    )
}

export default FirstColumHeader