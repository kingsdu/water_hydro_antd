import React,{Component} from 'react'
import { Layout } from 'antd';

import Header from '../components/common/CommonHeader'
import Footer from '../components/common/Footer'




/**
 * 新闻详情页面
 */
export default class SubContainer extends Component{
    render(){
        return(
            <Layout>
                <Header/>
                <Footer/>
            </Layout>
        )
    }
}