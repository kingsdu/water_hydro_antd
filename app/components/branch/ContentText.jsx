import React, {Component} from 'react'
import {Card, Col, Row} from 'antd'

const ContentText = ({contentData}) => {
    return(
        <div>
            {contentData&&contentData.map(
                item => (
                    <div className='ContentText'>
                        <h1>{item.title}</h1>
                        <div className='ContentText-span'>
                            <span className='span-1'>浏览次数：10</span><span>发布时间：{item.date} </span>
                        </div>
                        <Row>
                            <Col span={24}>
                                {
                                    item.content.split('#').map(
                                        item => (
                                            item.indexOf(':') != -1
                                            ?
                                            <div className='ContentText-img'>
                                                <img src={item} className='ContentText_image'/>
                                            </div>
                                            :
                                            <p className='ContentText_p'>
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



/**
 * 1 图片
 * 2 文字内容
 */
// const handleContent = (content) => (
// )

// const data = content.split("#")
// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
    
// }


// item.indexOf(':') != -1
// ?
// <img src={item}/>
// :

// if(item.indexOf(':') != -1){
//     item = element.substring(0,element.indexof(':')+1)
//     if(item == 'http' || item == 'https'){
//         //图片
//         return(
//             <img src={element}/>
//         )
//     }else{
//         //文字
//         return(
//             <p>
//                 {element}
//             </p>
//         )
//     }
// }else{
//     //文字
//     return(
//         <p>
//             {item}
//         </p>
//     )
// }


// const element = data[index];
// if(element.indexOf(':') != -1){
//     item = element.substring(0,element.indexof(':')+1)
//     if(item == 'http' || item == 'https'){
//         //图片
//         <img src={element}/>
//     }
// }else{
//     //文字
//     <p>
//         {element}
//     </p>
// }