import React from 'react'
import { HashRouter,Route } from 'react-router-dom'

import WebContainer from '../containers/WebContainer'
import BranchContainer from '../containers/BranchContainer'


const RootRoter = (
    <HashRouter>
        <div>
            <Route exact path="/" component={ WebContainer }/>
            <Route path="/child" component={ BranchContainer }/>
        </div>
    </HashRouter>
)



export default RootRoter