import React,{Component} from 'react';
import HomeHeader from '../components/HomeHeader'
import HomeFooter from '../components/HomeFooter'       
import HomeMainContainer from '../containers/HomeMainContainer'

export default class HomeContainer extends Component{
    render(){
        return(
            <div>
                <HomeHeader/>
                    <HomeMainContainer/>
                <HomeFooter/>
            </div>
        )
    }
}