import React, { Component } from 'react';
import { HashRouter,Route, Redirect ,Switch} from 'react-router-dom'
import { Layout } from 'antd';

const { Content, Footer } = Layout;

import BranchContainer from '../containers/BranchContainer'
import AcdemicContainer from '../containers/AcdemicContainer'
import ContentDetails from '../components/branch/ContentDetails'
import AwardContainer from '../containers/AwardContainer'
import CertificationContainer from '../containers/CertificationContainer'
import ScienceParkContainer from '../containers/ScienceParkContainer'
import MembershipContainer from '../containers/MembershipContainer'

export default class C_Route extends Component {
    render() {
        return(
            <Switch>
                <Route path="/child/branch/:module" component={BranchContainer}/>    
                <Route path="/child/academic/:module" component={AcdemicContainer}/>
                <Route path="/child/award/:module" component={AwardContainer}/>
                <Route path="/child/certification/:module" component={CertificationContainer}/>
                <Route path="/child/SciencePark/:module" component={ScienceParkContainer}/>
                <Route path="/child/membershipService/:module" component={MembershipContainer}/>
                <Route path="/child/detail/:module" component={ContentDetails}/>
            </Switch>
        )
    }
}