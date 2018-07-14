import React, { Component } from 'react';
import { Layout } from 'antd';
import CRoutes from '../config/C_Route'
import Header from '../components/common/CommonHeader'
import Footer from '../components/common/Footer'

class SubjectContainer extends Component {
    render(){
        return(
            <Layout>
                <Header/>
                    <div className='wrap center'>           
                        <CRoutes/>
                    </div>
                <Footer/>
            </Layout> 
        )
    }
}


export default SubjectContainer