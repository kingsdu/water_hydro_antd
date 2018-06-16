import React, { Component } from 'react';
import { HashRouter,Route, Redirect ,Switch} from 'react-router-dom'
import { Layout } from 'antd';

const { Content, Footer } = Layout;

import BranchContent from '../components/branch/BranchContent'
import OrganizationStr from '../components/branch/OrganizationStr'
import Communicate from '../components/communicate/Communicate'
import GetNewsData from '../components/communicate/GetNewsData'

export default class C_Route extends Component {
    render() {
        return(
            <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                <Switch>
                    <Route path="/branch/intro/:branchName" component={BranchContent}/>
                    <Route path="/branch/structure/:branchName" component={OrganizationStr}/>
                    
                    <Route path="/child/structure/:branchName" component={Communicate}/>        
                </Switch>
            </Content>
        )
    }
}