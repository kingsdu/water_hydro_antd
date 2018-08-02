import React, {Component} from 'react'
import {Form,Row,Col,Select,Input,Table,Icon,Button,Modal,message} from 'antd'
import BreadcrumbCustom from '../back/component/BreadcrumbCustom'
import axios from 'axios'
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'

import {getBackDataByModule,getBackCount} from '../../common/utils'
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;
const confirm = Modal.confirm;


export default class FailedAwardContainer extends Component{
    state = {
        selectedRowKeys : [], //选择的行
        data : [],
        pagination : {
            pageSize : 10,
            current : 0,
            total : 0,
        },
    }

    componentDidMount(){
        this.getServerData();
    }

    getServerData(){
        const module = this.props.match.params.module;
        const result = getBackCount(module);
        result.then((data)=>{
            if(data.Result == 'success'){
                this.state.pagination.total = data.Data;
            }    
        })
        const data = getBackDataByModule(this.state.pagination.current,this.state.pagination.pageSize,module)
        data.then((data)=>{
            if(data.Result == 'success'){
                this.setState({
                    data: data.Data,
                    pagination : this.state.pagination
                }); 
            }      
       })    
    }

    //翻页
    handleTableChange(pagination, filters, sorter){
        const pager = this.state.pagination;
        pager.current = (pagination.current-1) * 10;
        pager.pageSize = pagination.pageSize;
        this.setState({
            pagination: pager,
        });
        this.getServerData()
    }


    
    render(){
        const columns = [{
            title: '姓名',
            dataIndex: 'member_self.name',
            key: 'name',
        }, {
            title: '性别',
            dataIndex: 'member_self.sex',
            key: 'sex',
        },{
            title: '民族',
            dataIndex: 'member_self.nationality',
            key: 'nationality',
        },{
            title: '政治面貌',
            dataIndex: 'member_self.politicalStatus',
            key: 'politicalStatus',
        },{
            title: '学历',
            dataIndex: 'member_self.education',
            key: 'education',
        },{
            title: '联系方式',
            dataIndex: 'member_self.phone',
            key: 'phone',
        },{
            title: '申报奖项',
            dataIndex: 'award_infos.title',
            key: 'atitle',
        },{
            title: '查看详细资料',
            key: 'detailInfo',
            render: (text, record) => (
                <span><a href={record.appendix_path} target="_Blank">个人资料查看</a></span>
            ),
        },{
            title: '审批状态',
            key: 'state',
            render: (text, record) => (
                record.state == 3 ?
                <p>审批未通过</p>
                :<p>无状态</p>
            ),
        }];

        let localeObj = {
            emptyText: '暂无数据'
        }

        return(
            <div>
                <BreadcrumbCustom pathList={['奖项审批','审批未通过奖项']}></BreadcrumbCustom>
                <div className="m-t-20">
                    <Table
                        columns={columns}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        locale={localeObj}
                        onChange={this.handleTableChange.bind(this)}/>
                </div>
            </div>
        )
    }
}
