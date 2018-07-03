import React,{Component} from 'react'
import {Row, Col} from 'antd'


export default class HomeModuleDetail extends Component{
    state={
        data:null,
    }

    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <p>{this.state.title}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.state.content}</p>
                    </Col>
                </Row>
            </div>
        )
    }


    componentDidMount(){
        const id = this.props.id
        //根据id判断是哪个模块的新闻，获取数据，渲染UI
        
    }



}