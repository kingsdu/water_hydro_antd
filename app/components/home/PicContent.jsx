import React, {Component}from 'react'
import {Row, Col} from 'antd'
import {getHomeDateByType} from '../../common/utils'
import { HOME_DEFAULT_START} from '../../config/constant/commonConstant'
import { Link } from 'react-router-dom';


//图片和新闻内容共同显示模块
export default class PicContent extends Component{
    state = {
        data:null
    }

    componentDidMount(){
        const {type,serverType} = this.props
        const result = getHomeDateByType(HOME_DEFAULT_START,1,type,serverType)
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                });            
            }     
       })
    }

    //第一行带图片部分
    renderFirstRow(){
        const data = this.state.data;
        const result = data&&data.map(
            item => (
                <Row>
                    <Col span={11} offset={0}>
                        <img src={item.picture_url}/>
                    </Col>
                    <Col span={11} className='Col_content'>
                        <Link to={'/child/detail/'+this.props.type+'/'+item.id}  target="_Blank"> 
                            {
                                item.content.split('#')[0].indexOf(':')!= -1
                                ? 
                                item.content.split('#')[1].substring(0,40)+"..."
                                :
                                item.content.split('#')[0].substring(0,40)+"..."
                            }
                        </Link>
                    </Col>
                </Row>
            )
        )
        return result;
    }

    render(){
        return(
            <div className='PicContent'>      
                {this.renderFirstRow()}
            </div>
        )
    }
}



// const handlePic = ({content}) => {
//     const data = content.split('#')
//     let suffix = ''
//     let imageUrl = ''
//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         if(element.lastIndexOf("\.") != -1){
//             suffix = element.substring(element.lastIndexOf("\.")+1,element.length)
//             if(suffix == 'jpg' || suffix=='png' || suffix=='JPEG'){
//                 imageUrl = element
//                 return(
//                     <img src={imageUrl}/>
//                 )
//             }else{
//                 return(
//                     <img src={"http://chuantu.biz/t6/339/1530841393x-1404817497.jpg"}/>
//                 )
//             }
//         }
//     }
//     return(
//         <img src={"http://chuantu.biz/t6/339/1530841425x-1404817497.jpg"}/>
//     )
// }


// const handleContent = ({content}) => {
//     const data = content.split('#')
//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         if(element.lastIndexOf("\.") != -1){
//             continue;
//         }else{
//             return(
//                 <p>
//                     {element.substring(0,20)+'...' }
//                 </p>
//             )
//         }
//     }
// }




