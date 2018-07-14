import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import ColumnHeader from './ColumnHeader'

export default class BranchIntro extends Component{
    render(){
        const {isMore, isCenter ,type, title ,haveLine} = this.props;
        return(
            <div className='branchIntro'>
                <div className='columnHeader-div'>
                    <ColumnHeader
                    title={title}
                    type={type}
                    isMore={isMore}
                    isCenter={isCenter}/>
                </div>
                <Row>
                    <Col span={8}>
                        <Link to='/child/branch/brachInfo'><p>简介</p></Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/child/branch/organization'><p>组织机构</p></Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/child/branch/regulation'><p>章程</p></Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Link to='/child/branch/history'><p>发展</p></Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/child/branch/event'><p>大事记</p></Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/child/branch/documents'><p>文件</p></Link>
                    </Col>
                </Row>
            </div>
        )
    }
}