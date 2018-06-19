import React, {Component} from 'react'
import {Row, Col} from 'antd'

import ColumnHeader from './ColumnHeader'

//资质认证模块
const Certification = ({title,isMore,isCenter}) => {
    return(
        <div>
            <ColumnHeader
                title={title}
                isMore={isMore}
                isCenter={isCenter}/>
            <div className='Certification'>
                <Row>
                    <Col>
                        <div className='Col'>
                            <p>水利水电行业协会新印章</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='Col'>
                            <p>水利水电行业考核</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='Col'>
                            <p>地球物理师</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='Col'>
                            <p>资质培训</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Certification