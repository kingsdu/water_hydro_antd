import React, {Component} from 'react'
import {Row, Col ,Carousel} from 'antd'

import NoticeColumn from './NoticeColumn'
import MemberService from './MemberService'

const FirstColumn = ()=> {
    return (
        <div className='carousel'>
            <Carousel autoplay={true}
            dots={false}>
                <div>
                    <img src="http://i4.bvimg.com/622218/57b552ad14f89019.jpg"/>
                    <div className='carousel-font'>
                        <p>欢迎加入中国地球物理学会水利电力分会</p>
                    </div>
                </div>
                <div>
                    <img src="http://i4.bvimg.com/622218/e6f2168939039b8b.jpg"/>
                    <div className='carousel-font'>
                        <p>欢迎加入中国地球物理学会水利电力分会</p>
                    </div>
                </div>
                <div>
                    <img src="http://i4.bvimg.com/622218/07dc78977037ec62.jpg"/>
                    <div className='carousel-font'>
                        <p>欢迎加入中国地球物理学会水利电力分会</p>
                    </div>
                </div>
            </Carousel>
      </div>
    )
}

export default FirstColumn