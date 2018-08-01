import React, {Component} from 'react'
import {Form,Row,Col,Select,Input,Table,Icon,Button,Modal,message} from 'antd'
import BreadcrumbCustom from '../back/component/BreadcrumbCustom'
import axios from 'axios';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'

import {getBackDataByModule,getBackCount} from '../../common/utils'

const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;
const confirm = Modal.confirm;

class PassedMemberContainer extends Component{
    state = {
        selectedRowKeys : [], //选择的行
        data : [],
        pagination : {
            pageSize : 10,
            current : 0,
            total : 0,
        },
        visibleChangeModal : false,//修改框是否显示
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

        const data = getBackDataByModule(this.state.current,this.state.pageSize,module)
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
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({
            pagination: pager,
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        }, {
            title: '民族',
            dataIndex: 'nationality',
            key: 'nationality',
        }, {
            title: '籍贯',
            dataIndex: 'birthplace',
            key: 'birthplace',
        }, {
            title: '政治面貌',
            dataIndex: 'politicalStatus',
            key: 'politicalStatus',
        }, {
            title: '学历',
            dataIndex: 'education',
            key: 'education',
        }, {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
        },{
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: '查看详细资料',
            key: 'detailInfo',
            render: (text, record) => (
                <span><a href={record.appendix} target="_Blank">个人资料查看</a></span>
            ),
        },{
            title: '审批状态',
            key: 'state',
            render: (text, record) => (
                record.state == 2 ?
                <p>审批通过</p>
                :<p>无状态</p>
            ),
        }];

        let localeObj = {
            emptyText: '暂无数据'
        }

        return(
            <div>
                <BreadcrumbCustom pathList={['会员审批','审批通过会员']}></BreadcrumbCustom>
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

export default Form.create()(PassedMemberContainer)