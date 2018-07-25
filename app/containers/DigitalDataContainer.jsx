import React, {Component} from 'react'
import {Col, Row ,Card} from 'antd'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


import BranchSider from '../components/branch/BranchSider'
import ContentHeader from '../components/common/ContentHeader'
import DigitalHolderList from '../components/branch/DigitalHolderList'
import DigitalSecond from '../components/branch/DigitalSecond'
import { DEFAULT_COUNT,DEFAULT_START } from '../config/constant/commonConstant'
import {getContentByModule,getMenuDetailByModule,getInfoCount,getDigtalAllCount,testRegex} from '../common/utils'

/**
 * 数字资料模块
 * --学术年会
 * --学术会议
 * --纪念活动
*/
export default class DigitalDataContainer extends Component{
    state={
        data:null,
        category:"digitalData",
        type:null,
    }


    componentDidMount(){
        const module = this.props.match.params.module;
        if(!module.includes('|')){
            //一层
            const result = getInfoCount(module);
            result.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data
                    }); 
                }      
            })
        }else{
            //二层
            const id = module.split('|')[0]
            const type = module.split('|')[1]
            const result = getDigtalAllCount(id,type);
            result.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data,
                    }); 
                }      
            })
        }
        
    }

    componentWillReceiveProps(nextProps) {
        const module = nextProps.match.params.module
        if(module !== this.props.match.params.module){
            if(!module.includes('|')){
            //一层
            const result = getInfoCount(module);
            result.then((data)=>{
                if(data.Result == 'success'){
                    this.setState({
                        data: data.Data
                    }); 
                }      
            })}
            else{
                //二层
                const id = module.split('|')[0]
                const type = module.split('|')[1]
                const totalData = getDigtalAllCount(id,type);
                totalData.then((data)=>{
                    if(data.Result == 'success'){
                        this.setState({
                            data: data.Data,
                        }); 
                    }      
                })
            }
        }
    }


    render(){
        //分为三个不同的状态层，第一层（List展示）、第二层（某个会议三种不同模式展示）、第三层（某类资源详情：图片、视频）
        if(this.props.match.params.category == 'digital1'){
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <BranchSider category={this.state.category}/>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <ContentHeader category={this.state.category} module={this.props.match.params.module}/>
                                <DigitalHolderList module={this.props.match.params.module} total={this.state.data}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }else if(this.props.match.params.category == 'digital2'){
            const module = this.props.match.params.module;
            const id = module.split('|')[0]
            const type = module.split('|')[1]
            let childMenu = ''
                switch (type) {
                    case '1':
                        childMenu = '会议图集'
                        break;
                    case '2':
                        childMenu = '会议讲稿'
                        break;
                    case '3':
                        childMenu = '会议视频'
                        break;
                    default:
                        childMenu = '会议图集'
                        break;
            }
            return(
                <div>
                    <Row>
                        <Col span={5}>
                            <Card>
                                <Menu
                                    mode={'inline'} 
                                    defaultSelectedKeys={['key01']}
                                    openKeys={['key']}
                                    style={{ width: 197 }}>
                                    <Menu.SubMenu key={'key'} title={<span><Icon type={'appstore'}/><span>{'会议资料集'}</span></span>}>
                                        <Menu.Item key={'key01'}> <Link to={'/child/digitalData/digital2/'+id+'|1'}>{'会议图集'}</Link></Menu.Item>
                                        <Menu.Item key={'key02'}> <Link to={'/child/digitalData/digital2/'+id+'|2'}>{'会议讲稿'}</Link></Menu.Item>
                                        <Menu.Item key={'key03'}> <Link to={'/child/digitalData/digital2/'+id+'|3'}>{'会议视频'}</Link></Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>
                            </Card>
                        </Col>
                        <Col span={18} offset={1}>
                            <Card>
                                <div className='ContentHeader'>
                                    <span className='span-left'>{childMenu}</span>
                                    <span className='span-right'>{childMenu}<Icon type="right" />{'会议资料'}</span>
                                </div>
                                <DigitalSecond id={id} type={type} total={this.state.data}/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}