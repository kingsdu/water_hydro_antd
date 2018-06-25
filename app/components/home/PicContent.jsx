import React, {Component}from 'react'
import {Row, Col} from 'antd'
import {getHomeDateByType} from '../../common/fetch'

//图片和新闻内容共同显示模块
export default class PicContent extends Component{
    state = {
        data:null,
        pageStart:1,
        size:1
    }

    componentDidMount(){
        const {type,serverType} = this.props
        const {pageStart,size} = this.state
        const result = getHomeDateByType(pageStart,size,type,serverType)
        result.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                });            
            }     
       })
    }

    render(){
        const{imageUrl,content} = this.props
        return(
            <div className='PicContent'>      
                    {
                         this.state.data && this.state.data.map((item) => {
                             return(
                                <Row>
                                    <Col span={12}>
                                        {
                                            handlePic(item)
                                        }
                                    </Col>
                                    <Col span={12}>
                                        {
                                            handleContent(item)
                                        }
                                    </Col>
                                </Row>
                             )
                         })
                    }
            </div>
        )
    }
}



const handlePic = ({content}) => {
    const data = content.split('#')
    let suffix = ''
    let imageUrl = ''
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.lastIndexOf("\.") != -1){
            suffix = element.substring(element.lastIndexOf("\.")+1,element.length)
            if(suffix == 'jpg' || suffix=='png' || suffix=='JPEG'){
                imageUrl = element
                return(
                    <img src={imageUrl}/>
                )
            }else{
                return(
                    <img src={"http://i2.bvimg.com/622218/804a1454df9c824b.jpg"}/>
                )
            }
        }
    }
    return(
        <img src={"http://i2.bvimg.com/622218/804a1454df9c824b.jpg"}/>
    )
}


const handleContent = ({content}) => {
    const data = content.split('#')
    let suffix = ''
    let imageUrl = ''
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.lastIndexOf("\.") != -1){
            continue;
        }else{
            return(
                <p>
                   {element.substring(0,20)+'...' }
                </p>
            )
        }
    }
}




