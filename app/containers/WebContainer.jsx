import React,{Component} from 'react'
import CommonHeader from '../components/common/CommonHeader'
import Footer from '../components/common/Footer'
import HomeContainer from '../containers/HomeContainer'

export default class WebContainer extends Component{
    render(){
        return(
            <div className='Container'>
                <CommonHeader/>
                    <div className='wrap center'>
                        <HomeContainer/>
                    </div>
                <Footer/>
            </div>
        )
    }
}