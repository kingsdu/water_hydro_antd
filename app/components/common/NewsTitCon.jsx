import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {getHomeDateByType} from '../../common/utils'
import { HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1 } from '../../config/constant/commonConstant'



export default class NewsTitCon extends Component{
    state = {
        data:null
    }

    componentDidMount(){
        const {type,serverType} = this.props
        const result = getHomeDateByType(HOME_DEFAULT_START,HOME_DEFAULT_COUNT_1,type,serverType)
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
                            <div className='newsTitCon' key={item.id}>   
                                <p className='title'>
                                    <Link to={'/child/'+this.props.type+'/'+item.id}>{item.title}</Link>
                                </p>
                                <p className='content'>
                                    {
                                        item.content.split('#')[0].indexOf(':')!= -1
                                        ? 
                                        item.content.split('#')[1].substring(0,80)+"..."
                                        :
                                        item.content.split('#')[0].substring(0,80)+"..."
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