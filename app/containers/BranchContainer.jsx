import React, { Component } from 'react';
import { Layout,Card,Row,Col } from 'antd';
import BranchSider from '../components/branch/BranchSider'
import CRoutes from '../config/C_Route'

import Header from '../components/common/CommonHeader'
import Footer from '../components/common/Footer'
import BranchContent from '../components/branch/BranchContent'


class BranchContainer extends Component {
    render(){
        const params = this.props.match.params
        return(
        <Layout>
            <Header/>
                <div className='wrap center'>
                    <Row>
                        <Col span={24}>              
                            <CRoutes/>
                        </Col>
                    </Row>
                </div>
            <Footer/>
        </Layout> 
        )
    }
}


export default BranchContainer