import React, {Component} from 'react'
import {Icon} from 'antd'

export default class DigitalWordSet extends Component{


    renderTitle(){
        const title = this.props.data&&this.props.data.map(
            item =>(
                <div>
                    {item.title}
                </div>
            )
        )
        return title
    }



    render(){
        return(
            <div>
                <p className="location_p">数字资料>讲稿</p>
                {
                    this.props.data&&this.props.data.map(
                        item => (
                           <div className='wordSet_div'>
                                <p className="p_title"><span>PDF</span>{item.title}</p>
                                <div className="span_author_time">
                                    <span className="span_author">作者：{item.author}</span>
                                    <span className="span_time">演讲时间：{item.pubtime}</span>
                                </div>
                                <span className="span_appendix"><Icon type="download" /><a href={item.file_path}>下载附件</a></span>
                           </div>
                        )
                    )
                }

            </div>
        )
    }
}