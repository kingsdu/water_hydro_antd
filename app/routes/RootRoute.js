import React from 'react'
import { HashRouter,Route } from 'react-router-dom'
import BrachInfoContainer from '../containers/Branch/BrachInfoContainer'
import HomeContainer from '../containers/HomeContainer'
import OrganizationContainer from '../containers/Branch/OrganizationContainer'
import RegulationContainer from '../containers/Branch/RegulationContainer'
import HistoryContainer from '../containers/Branch/HistoryContainer'
import EventContainer from '../containers/Branch/EventContainer'
import DocumentsContainer from '../containers/Branch/DocumentsContainer'

import DynamicsWorkContainer from '../containers/Academic/DynamicsWorkContainer'

import RewardDynamicsContainer from '../containers/Award/RewardDynamicsContainer'

import TitlereviewContainer from '../containers/Certification/TitlereviewContainer'

import ScienceDynamicsContiner from '../containers/Science/ScienceDynamicsContiner'

import MembershipServiceContainer from '../containers/Membership/MembershipServiceContainer'

import AcademicPapersContainer from '../containers/Digital/AcademicPapersContainer'


const RootRoute = (
    <HashRouter>
        <div>
            <Route exact path="/" component={ HomeContainer }/>
            <Route path="/branch/brachInfo" component={ BrachInfoContainer }/>
            <Route path="/branch/organization" component={ OrganizationContainer }/>
            <Route path="/branch/regulation" component={ RegulationContainer }/>
            <Route path="/branch/history" component={ HistoryContainer }/>
            <Route path="/branch/event" component={ EventContainer }/>
            <Route path="/branch/documents" component={ DocumentsContainer }/>
            
            <Route path="/academic/dynamicsWork" component={ DynamicsWorkContainer }/>

            <Route path="/award/rewardDynamics" component={ RewardDynamicsContainer }/>
            
            <Route path="/certification/titlereview" component={ TitlereviewContainer }/>

            <Route path="/SciencePark/scienceDynamics" component={ ScienceDynamicsContiner }/>

            <Route path="/membershipService/titlereview" component={ MembershipServiceContainer }/>

            <Route path="/digitalData/academicPapers" component={ AcademicPapersContainer }/>

        </div>
    </HashRouter>
)

export default RootRoute
