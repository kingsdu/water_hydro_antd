import React,{Component} from 'react';
import HomeHeader from '../components/HomeHeader'
import HomeFooter from '../components/HomeFooter'

export default class HomeContainer extends Component{
    render(){
        return(
            <div>
                <HomeHeader/>
                    
                <HomeFooter/>
            </div>
        )
    }
}