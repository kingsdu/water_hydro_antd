import React, { Component } from 'react';
import { HashRouter,Route, Redirect ,Switch} from 'react-router-dom'
import { Layout } from 'antd';

const { Content, Footer } = Layout;

import BranchContainer from '../containers/BranchContainer'
import AcdemicContainer from '../containers/AcdemicContainer'
import ContentDetails from '../components/branch/ContentDetails'
import AwardContainer from '../containers/AwardContainer'
import DigitalDataContainer from '../containers/DigitalDataContainer'
import ScienceParkContainer from '../containers/ScienceParkContainer'
import MembershipContainer from '../containers/MembershipContainer'
import DynamicContainer from '../containers/DynamicContainer'
import DigitalDetails from '../components/branch/DigitalDetails'

export default class C_Route extends Component {
    render() {
        return(
            <Switch>
                <Route path="/child/branch/:module" component={BranchContainer}/>    
                <Route path="/child/dynamic/:module" component={DynamicContainer}/>
                <Route path="/child/academic/:module" component={AcdemicContainer}/>
                <Route path="/child/SciencePark/:module" component={ScienceParkContainer}/>
                <Route path="/child/membershipService/:module" component={MembershipContainer}/>
                <Route path="/child/award/:module" component={AwardContainer}/>
                <Route path="/child/digitalData/:category/:module" component={DigitalDataContainer}/>
                <Route path="/child/detail/:category/:module" component={ContentDetails}/>
                <Route path="/child/digitalDataDetail/:type/:id" component={DigitalDetails}/>
            </Switch>
        )
    }                       
}