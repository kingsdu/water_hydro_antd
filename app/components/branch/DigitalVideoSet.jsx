import React, {Component} from 'react'

export default class DigitalVideoSet extends Component{

    render(){
        return(
            <div className='videoSet_div'>
                <p>数字资料>视频</p>
                {
                    this.props.data&&this.props.data.map(
                        item => (
                           <div>
                                <p>{item.title}</p>
                                <p>作者：{item.author}</p>
                                <p>会议时间：{item.pubtime}</p>
                                <span><a href={item.file_path}>会议视频文件</a></span>
                           </div>
                        )
                    )
                }
            </div>
        )
    }
}