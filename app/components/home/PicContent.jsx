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
        const type = this.props.type
        const {pageStart,size} = this.state
        const result = getHomeDateByType(pageStart,size,type)
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
                                            item.picture 
                                            ?
                                            <img src={item.picture}/>
                                            :
                                            <img src={imageUrl}/>
                                        }
                                    </Col>
                                    <Col span={12}>
                                        <p>{
                                            item.content 
                                            ?
                                            item.content.substring(0,20)+'...'
                                            :
                                            {content}
                                        }</p>
                                    </Col>
                                </Row>
                             )
                         })
                    }
            </div>
        )
    }
}