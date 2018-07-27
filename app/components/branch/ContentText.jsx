import React from 'react'
import {Col, Row} from 'antd'

/**
 * 直接展示内容组件
*/

const ContentText = ({contentData}) => {
    return(
        <div>
            {contentData&&contentData.map(
                item => (
                    <div className='ContentText' key={item.id}>
                        <h1>{item.title}</h1>
                        <div className='ContentText-span'>
                            <span className='span-1'>浏览次数：{item.browser}</span><span>发布时间：{item.pubtime} </span>
                        </div>
                        <Row>
                            <Col span={24}>
                                {
                                   item.content.split('#').map(
                                        item => (
                                            item.indexOf(':') != -1
                                            ?
                                            item.substring(item.lastIndexOf('.')+1,item.length) == 'jpg' || item.substring(item.lastIndexOf('.')+1,item.length) == 'png'
                                            ?
                                            <div className='ContentText-img' key={item.id}>
                                                <img src={item} className='ContentText_image'/>
                                            </div>
                                            :
                                            item.indexOf('^') != -1
                                            ?
                                            <div className='contentText-a'>
                                                <a href={item.substring(item.indexOf('^')+1,item.length)}>相关附件</a>
                                            </div>
                                            :
                                            <p className='ContentText_p' key={item.id}>
                                                {item}
                                            </p> 
                                            :
                                            <p className='ContentText_p' key={item.id}>
                                                {item}
                                            </p>  
                                        )
                                   ) 
                                }
                            </Col>                      
                        </Row> 
                    </div> 
                )
            )}
        </div>
    )
}
export default ContentText


