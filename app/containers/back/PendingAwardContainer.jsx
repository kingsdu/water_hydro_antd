import React, {Component} from 'react'
import {Form,Row,Col,Select,Input,Table,Icon,Button,Modal,message} from 'antd'
import BreadcrumbCustom from '../back/component/BreadcrumbCustom'
import axios from 'axios';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'

const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;
const confirm = Modal.confirm;

import {getBackDataByModule,getBackCount} from '../../common/utils'

export default class PendingAwardContainer extends Component{
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


    //不通过审批
    failed(record){
        confirm({
            title: '点击确定后该会员将未通过该证书审批！',
            okText : '确定',
            cancelText : '取消',
            onOk:()=>{
                const formData = new FormData(); 
                const route = TEMP_SERVER_URL+'AwardInfos/updateAwardState'
                formData.append("id",record.id);
                formData.append("state",3);
                axios.post(route,formData).then(response => {
                    if(response.data.Result === 'success'){
                        this.getServerData();
                    }
                  }).catch(error => {
                    console.log(error);
                }); 
            },
        });
    }


    //通过审批
    successed(record){
        confirm({
            title: '点击确定后该会员将通过审批！',
            okText : '确定',
            cancelText : '取消',
            onOk:()=>{
                const formData = new FormData();  
                const route = TEMP_SERVER_URL+'AwardInfos/updateAwardState'
                formData.append("id",record.id);
                formData.append("state",2);
                axios.post(route,formData).then(response => {
                    if(response.data.Result === 'success'){
                        this.getServerData();
                    }
                  }).catch(error => {
                    console.log(error);
                });
            },
          });
    }


      //翻页
      handleTableChange(pagination, filters, sorter){
        const pager = this.state.pagination;
        pager.current =(pagination.current-1) * 10;
        pager.pageSize = pagination.pageSize;
        this.setState({
            pagination: pager,
        });
        this.getServerData();
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
                record.state == 1 ?
                <p>待审批</p>
                :<p>无状态</p>
            ),
        },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <Button size="small" onClick={this.successed.bind(this,record)}>通过</Button>
                <Button type="danger" size="small" onClick={this.failed.bind(this,record)}>不通过</Button>
              </span>
            ),
        }];

        let localeObj = {
            emptyText: '暂无数据'
        }

        
        return(
            <div>
                <BreadcrumbCustom pathList={['奖项审批','待审批奖项']}></BreadcrumbCustom>
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