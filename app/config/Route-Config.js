import React from 'react'
import {Router,Route,IndexRoute,Redirect,hashHistory} from 'react-router'

import WebContainer from '../containers/WebContainer'
import HomeContainer from '../components/HomeContainer'


const RootRoter = (
    <Router history={ hashHistory }>
        <Route path="/" component={ WebContainer }>
            <IndexRoute  component={ HomeContainer }/>
        </Route>
    </Router>
)

export default RootRoter