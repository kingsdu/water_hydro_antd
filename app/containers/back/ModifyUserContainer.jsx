import React, {Component} from 'react'
import { Form, Input, Modal ,Tooltip, Icon, Cascader,Upload,Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'
import axios from 'axios';
import {Link} from 'react-router-dom'
import BreadcrumbCustom from './component/BreadcrumbCustom'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class ModifyUserContainer extends Component{
    state = {
        data:null
    }

    submitChange(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            if(values.password1 !== values.password2) {
              Modal.warning({
                title : '两次输入的密码不一致',
                okText : '确定'
              })
              return;
            }
            // const formData = new FormData();  
            // formData.append("account",values.account);
            // formData.append("passwords",values.passwords);
            // formData.append("name",values.name);
          }       
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
         //表单布局
        const formItemLayout = {
            labelCol: {
            xs: { span: 24 },
            sm: { span: 4 , offset : 4},
            },
            wrapperCol: {
            xs: { span: 24 },
            sm: { span: 8 },
            },
        };

        return(
            <div>
                <BreadcrumbCustom pathList={['个人中心','修改密码']}></BreadcrumbCustom>
                <div className="change-password-content">
                    <Form onSubmit={this.submitChange.bind(this)}>
                    <FormItem
                        {...formItemLayout}
                        label="原密码"
                        >
                        {getFieldDecorator('oldPassword',{
                            rules: [{ required: true, message: '请输入原密码！' }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="新密码"
                        >
                        {getFieldDecorator('password1',{
                            rules: [{ required: true, message: '请输入新密码！' }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="确认密码"
                        >
                        {getFieldDecorator('password2',{
                            rules: [{ required: true, message: '请输入确认密码！' }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                        <Row>
                        <Col span={12} offset={4}>
                            <Button type="primary" htmlType="submit" className="f-r">确定</Button>
                        </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(ModifyUserContainer);