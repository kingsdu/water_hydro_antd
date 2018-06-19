import React from 'react'
import {Row, Col} from 'antd'

//图片和新闻内容共同显示模块

const PicContent = ({content,imageUrl}) => {
    return(
        <div className='PicContent'>
            <Row>
                <Col span={12}>  
                    <img src={imageUrl}/>
                </Col>
                <Col span={12}>
                    <p>{content}</p>
                </Col>
            </Row>
        </div>
    )

}

export default PicContent