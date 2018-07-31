import React from 'react'
import { HashRouter,Route } from 'react-router-dom'

import WebContainer from '../containers/WebContainer'
import SubjectContainer from '../containers/SubjectContainer'
import Login from '../containers/LoginContainer'
import BackMainContainer from '../containers/back/BackMainContainer' 

/**
 * 组件的传递性
 */

const RootRoter = (
    <HashRouter>
        <div>
            <Route exact path="/" component={ WebContainer }/>
            <Route path="/child" component={ SubjectContainer }/>
            <Route path="/login" component={ Login }/>
            <Route path="/back" component={ BackMainContainer }/>
        </div>
    </HashRouter>
)



export default RootRoter