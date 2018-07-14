import React, {Component} from 'react'
import {Carousel} from 'antd'

import NoticeColumn from './NoticeColumn'
import MemberService from './MemberService'

const FirstColumn = ()=> {
    return (
        <div className='carousel'>
            <Carousel autoplay={true}
            dots={false}>
                <div>
                    <img src="http://chuantu.biz/t6/338/1530629881x-1404817497.jpg"/>
                    <div className='carousel-font'>
                        <p>欢迎加入中国地球物理学会水利电力分会</p>
                    </div>
                </div>
                <div>
                    <img src="http://chuantu.biz/t6/338/1530629915x-1404817497.jpg"/>
                    <div className='carousel-font'>
                        <p>欢迎加入中国地球物理学会水利电力分会</p>
                    </div>
                </div>
                <div>
                    <img src="http://chuantu.biz/t6/338/1530629953x-1404817497.jpg"/>
                    <div className='carousel-font'>
                        <p>欢迎加入中国地球物理学会水利电力分会</p>
                    </div>
                </div>
            </Carousel>
      </div>
    )
}

export default FirstColumn