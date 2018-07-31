import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'

const FormItem = Form.Item;

class Login extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("values",values);
                //跳转主页
				this.props.history.push('/back/BackMainContainer');//react-router 4.0 写法
                // const formData = new FormData();  
                // formData.append("account",values.account);
                // formData.append("passwords",values.passwords);
                // axios.post(TEMP_SERVER_URL + "member/uploadAvatorPic", formData).then( res => {
                //     if(res.data.Result === 'success'){
                //         this.props.form.resetFields()
                //     }
                // }).catch( err => console.log(err))          
            }
        });
    }

    
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="login">
                <div className="login-content-wrap">
                    <div className="login-content">
                        <img className="logo" src={'http://chuantu.biz/t6/351/1533043173x-1404817491.jpg'}/>
                        <div className="login-from">
                            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                                <FormItem>
                                {getFieldDecorator('account', {
                                    rules: [{ required: true, message: '请输入用户名！' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码！' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
				</div>
            </div>
        )
    }
}

export default Form.create()(Login)