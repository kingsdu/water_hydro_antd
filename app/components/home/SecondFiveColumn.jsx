import React, {Component} from 'react'
import {Row, Col} from 'antd'

import NoticeColumn from '../../components/home/NoticeColumn'
import MemberService from '../../components/home/MemberService'

const SecondFiveColumn = () =>{
    return(
        <NoticeColumn
                title='图片新闻'
                type='picNews'
                isCenter={false}
                isMore={false}>                    
        </NoticeColumn>
    )
}

export default SecondFiveColumn