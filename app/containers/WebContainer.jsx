import React,{Component} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HomeContainer from '../containers/HomeContainer'

export default class WebContainer extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='wrap center'>
                    <HomeContainer/>
                </div>
                <Footer />
            </div>
        )
    }
}