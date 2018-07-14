import React from 'react'
import { HashRouter,Route } from 'react-router-dom'

import WebContainer from '../containers/WebContainer'
import SubjectContainer from '../containers/SubjectContainer'


/**
 * 组件的传递性
 */

const RootRoter = (
    <HashRouter>
        <div>
            <Route exact path="/" component={ WebContainer }/>
            <Route path="/child" component={ SubjectContainer }/>
        </div>
    </HashRouter>
)



export default RootRoter