import React, {Component} from 'react'
import {Icon} from 'antd'


export default class DigitalVideoSet extends Component{

    render(){
        return(
            <div>
                <p className="location_p">数字资料>视频</p>
                {
                    this.props.data&&this.props.data.map(
                        item => (
                           <div className='videoSet_div'>
                                <p className="p_title">{item.title}</p>
                                <div className="span_author_time">
                                    <span className="span_author">作者：{item.author}</span>
                                    <span>会议时间：{item.pubtime}</span>
                                </div>
                                <span className="span_appendix"><Icon type="download" /><a href={item.file_path}>下载视频文件</a></span>
                           </div>
                        )
                    )
                }
            </div>
        )
    }
}