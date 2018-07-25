import React, {Component} from 'react'
import {Col, Row} from 'antd'


const MemberShowHolder = ({data}) => {
    return(
        <div>
            {
                data&&data.map(
                    item => (
                        <div className='memberDiv'>
                            <Row>
                                <Col span={7}>
                                    <img src={item.avatar_path} className='memberPic'/>
                                </Col>
                                <Col span={15}>
                                    <div className='nameDiv'>
                                        {item.name}
                                    </div>
                                    <div className='educationDiv'>
                                        {item.education}
                                    </div>
                                    <div className='subjectExpertiseDiv'>
                                        {item.subjectExpertise}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )  
                )
            }
        </div>
    )
}
export default MemberShowHolder