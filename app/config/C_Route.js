import React, { Component } from 'react';
import { HashRouter,Route, Redirect ,Switch} from 'react-router-dom'
import { Layout } from 'antd';

const { Content, Footer } = Layout;

import BranchContent from '../components/branch/BranchContent'
import AcdemicContainer from '../components/academic'
import ContentDetails from '../components/branch/ContentDetails'

export default class C_Route extends Component {
    render() {
        return(
            <Content>
                 <Switch>
                    <Route path="/child/branch/:module" component={BranchContent}/>    
                    <Route path="/child/academic/:module" component={AcdemicContainer}/>
                    <Route path="/child/detail/:module" component={ContentDetails}/>
                </Switch>
            </Content>
        )
    }
}