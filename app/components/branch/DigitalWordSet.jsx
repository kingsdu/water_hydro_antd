import React, {Component} from 'react'

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
            <div className='wordSet_div'>
                <p>数字资料>讲稿</p>
                {
                    this.props.data&&this.props.data.map(
                        item => (
                           <div>
                                <p>{item.title}</p>
                                <p>作者：{item.author}</p>
                                <p>会议时间：{item.pubtime}</p>
                                <span><a href={item.file_path}>下载附件</a></span>
                           </div>
                        )
                    )
                }

            </div>
        )
    }
}