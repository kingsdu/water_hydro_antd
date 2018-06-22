import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {getHomeDateByType} from '../../common/fetch'

export default class NewsTitCon extends Component{
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
        return(
            <div>
                {
                    this.state.data && this.state.data.map((item) => {
                        return(
                            <div className='newsTitCon'>   
                                <p className='title'>
                                    {item.title}
                                </p>
                                <p className='content'>
                                    {
                                        item.content.substring(0,80)+"..."
                                    }
                                </p>
                            </div>
                        )
                    })
                }
            </div>                   
        )
    }
}