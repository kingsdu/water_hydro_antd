import React from 'react'
import { HashRouter,Route, Redirect,Switch} from 'react-router-dom'

import WebContainer from '../containers/WebContainer'
import BranchContainer from '../containers/BranchContainer'
import CommuniteContainer from '../containers/CommuniteContainer'
import CommuniteDetails from '../containers/CommuniteDetails'
import BranchContent from '../components/branch/BranchContent';


const RootRoter = (
    <HashRouter>
        <div>
            <Route exact path="/" component={ WebContainer }/>
            <Route path="/child/:category/:module" component={ BranchContainer }/>
            <Route path="/content/:id" component={CommuniteDetails} />
        </div>
    </HashRouter>
)



export default RootRoter