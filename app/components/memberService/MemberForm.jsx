import React, {Component} from 'react'
import { Form, Input, Modal ,Tooltip, Icon, Cascader,Upload,Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'
import httpServer from '../../common/httpServer'
import axios from 'axios'
/**
 * 会员模块登陆
*/
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class MemberFrom extends Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        status:'',
        agreeRule:false,
        loading: false,
        imageUrl:''
    };

    /**
     * 上传图片
     */

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }

    handleChangePic = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }

    /**
     * 密码输入模块
     */
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        let modes = ''//密码强度
        let status = ''//状态提示
        let message = ''//密码强度提示语
        if (value && form.getFieldValue('passwords')) {
            if(form.getFieldValue('passwords').length<6 ||form.getFieldValue('passwords').length>12){
                message = '密码长度应为6~12位'
                status = 'error'
            }else{
                modes = this.checkStrong(form.getFieldValue('passwords'))
                switch (modes) {
                    case 1:
                        status = 'warning'
                        message = '密码强度低'
                        break;
                    case 2:
                        status = 'success'
                        message = '密码强度高'
                        break;
                    default:
                        break;
                }
            }
        }
        this.setState({
            status:status,
            message:message,
        })
        callback();
    }

    //返回强度级别  
	checkStrong(sPW){  
		if (sPW.length<6)  
			return 0; //密码太短，不检测级别
        let Modes=0;  
        let i = 0;
		for (i=0;i<sPW.length;i++){  
			//密码模式  
			Modes|=this.CharMode(sPW.charCodeAt(i));  
		}
		return this.bitTotal(Modes);  
    }
    //bitTotal函数，计算密码模式 
    bitTotal(num){  
        let modes=0;
        let i = 0;
		for (i=0;i<4;i++){  
			if (num & 1) modes++;  
			num>>>=1;  
		}
		return modes;  
    }
    //判断输入密码的类型
    CharMode(iN){  
		if (iN>=48 && iN <=57) //数字  
			return 1;  
		if (iN>=65 && iN <=90) //大写  
			return 2;  
		if (iN>=97 && iN <=122) //小写  
			return 4;  
		else  
			return 8;   
	}

    //判断两次密码是否相同
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('passwords')) {
          callback('两次密码输入不一致');
        } else {
          callback();
        }
      }

    
    //handleSubmit(e) {const value = this.props.form;}  错误

    /**
     * 表单提交
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                httpServer({
                    url : TEMP_SERVER_URL+"/member/front/register",
                    method : 'post'
                  },{
                    account : values.account,
                    // password : values.password,
                    // name : values.name,
                    // idCard : values.idCard,
                    // email : values.email,
                    // company : values.company,
                    // phone : values.phone,
                    // education : values.education,
                    // jobTitle : values.jobTitle,
                })
            }
        });
    }

    /**
     * 同意会员规则
     */
    handleAgreeRule = (e) => {
        e.preventDefault();
        this.setState({
            agreeRule: !this.state.agreeRule,
        })
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        const { imageUrl,autoCompleteResult} = this.state;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <span>+86</span>
        );

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },//控制左侧间距
            },
            wrapperCol: {
              xs: { span: 20 },
              sm: { span: 14 },//控制表格宽度
            },
        };

        const agreeFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 10,
              },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 11,
              },
            },
        };

        

        return(
            <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
                  <FormItem 
                {...formItemLayout} 
                label={(
                    <span>
                    用户名&nbsp;
                    <Tooltip title="登录账号（6~12位:包含字母和数字下划线）">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                )}>
                    {getFieldDecorator('account', {
                        rules: [{
                            required: true, message: '请输入6~12用户名(包含字母和数字下划线)', whitespace:true,
                            max:12,min:6,pattern:'^[0-9a-zA-Z_]{1,}$'
                        }]},
                    )(
                        <Input />
                    )}
                </FormItem>
                <FormItem {
                    ...formItemLayout} 
                    label="密码"
                    hasFeedback
                    validateStatus={this.state.status}>
                    {getFieldDecorator('passwords', {
                        rules: [{
                        required: true,validator: this.checkConfirm
                        }],
                    })(
                        <div>
                            <Input type="password" className='ant-input ant-input-lg'/>
                            <div className='passworddiv'>{this.state.message}</div>
                        </div>
                    )}
                </FormItem>
                <FormItem
                    label="确认密码"
                    {...formItemLayout}
                    >
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: '请再次输入密码',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                    >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, 
                            message: '请输入本人真实姓名', 
                            whitespace: true,
                            pattern:'^[\u4e00-\u9fa5]{2,4}$'}],
                    })(
                        <Input />
                    )}
                </FormItem>
				<FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                        上传头像&nbsp;
                        <Tooltip title="请上传本人证件照，用于会员基本资料信息">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}>
                    {getFieldDecorator('upload', {
                        rules: [{ required: true, message: '请上传本人证件照'}],
                    })(
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            showUploadList={false}
                            action={TEMP_SERVER_URL + "member/front/uploadAvator"}
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChangePic}>
                            {imageUrl ? <img src={imageUrl} alt="avatar" className='avatorImage'/> : uploadButton}
                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                        身份证号&nbsp;
                        <Tooltip title="请输入18位二代身份证号码">
                            <Icon type="question-circle-o"/>
                        </Tooltip>
                        </span>
                    )}>
                    {getFieldDecorator('idCard', {
                        rules: [{ required: true, message: '请输入本人真实身份证号', whitespace: true,
                        pattern:'^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$'}],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: '输入E-mail无效',
                        }, {
                        required: true, message: '请输入E-mail',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                        所在单位&nbsp;
                        <Tooltip title="本人所在单位">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    >
                    {getFieldDecorator('company', {
                        rules: [{ required: false,pattern:'^[\u4e00-\u9fa5]{2,30}$',message:"请输入本人所在单位"}],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                    >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入正确手机号', whitespace: true,
                        pattern:'^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$'}],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="学历"
                    >
                    {getFieldDecorator('education',{
                        rules: [{ required: true, message: '请选择学历', whitespace: true }],
                    })(
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="请选择学历"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="College">大专</Option>
                            <Option value="Bachelor">本科</Option>
                            <Option value="Postgraduate">研究生</Option>
                            <Option value="Doctor">博士生</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                        职务&nbsp;
                        <Tooltip title="本人单位职务">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    >
                    {getFieldDecorator('jobTitle',{
                         rules: [{ required: false, message: '请输入有效的单位职务', whitespace: true,
                         pattern:'^[\u4e00-\u9fa5]{2,30}$'}],
                    })(
                         <Input />
                    )}
                </FormItem>
               <FormItem
                    {...formItemLayout}
                    label="相关附件上传"
                    >
                    <div className="dropbox">
                        <Upload.Dragger name="avatar" 
                            action={TEMP_SERVER_URL + "member/front/uploadAvator"}>
                            <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">点击或者拖拽文件到该区域</p>
                            <p className="ant-upload-hint">支持单个和多个文件</p>
                        </Upload.Dragger>
                    </div>
                </FormItem>
                <FormItem {...agreeFormItemLayout }>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox
                        onChange={this.handleAgreeRule}
                        >我已仔细阅读<a href="#" target="_blank">会员细则</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {
                        this.state.agreeRule
                        ?
                        <Button type="primary" htmlType="submit">提交</Button>
                        :
                        <Button type="primary" htmlType="submit" disabled>提交</Button>
                    }
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(MemberFrom);