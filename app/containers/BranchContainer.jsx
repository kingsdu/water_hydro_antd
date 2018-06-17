import React, { Component } from 'react';
import { Layout,Card,Row,Col } from 'antd';
import BranchSider from '../components/branch/BranchSider'
import CRoutes from '../config/C_Route'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

class BranchContainer extends Component {
    render(){
        const category = this.props.match.params.category
        return(
        <Layout>
            <Header/>
                <div className='wrap center'>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider category={category}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Layout>
                                <Card>
                                    <CRoutes/>
                                </Card>
                            </Layout>
                        </Col>
                    </Row>
                </div>
            <Footer/>
        </Layout> 
        )
    }
}


export default BranchContainer