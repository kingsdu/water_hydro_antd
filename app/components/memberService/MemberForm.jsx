import React, {Component} from 'react'
import { Form, Input, Modal ,Tooltip, Icon, Cascader,Upload,Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'
import httpServer from '../../common/httpServer'
import {uploadForm} from '../../common/utils'
import axios from 'axios';
import {Link} from 'react-router-dom'

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
        imageUrl:'',
        fileList:[],
        dragFlieList:[],
        data:null
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

    /**
     * 表单提交
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {  
                console.log("values",values)     
                const formData = new FormData();  
                formData.append("account",values.account);
                formData.append("passwords",values.passwords);
                formData.append("name",values.name);
                formData.append("idCard",values.idCard);
                formData.append("email",values.email);
                formData.append("company",values.company);
                formData.append("phone",values.phone);
                formData.append("education",values.education);
                formData.append("jobTitle",values.jobTitle);
                formData.append('pic',values.upload.file,values.upload.file.name);
                formData.append("appendix",values.dropbox.file,values.dropbox.file.name);
                axios.post(TEMP_SERVER_URL + "member/uploadAvatorPic", formData).then( res => {
                    if(res.data.Result === 'success'){
                        this.props.form.resetFields()
                    }
                }).catch( err => console.log(err))
            }
        });
    }

    /**
     * 同意会员规则
     */
    handleAgreeRule = (e) => {
        // e.preventDefault();//开启导致点击两次才能选中
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

        const uploadProps={
            name:"avatar",
            action: TEMP_SERVER_URL + "member/uploadAvatorPic",
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                  const index = fileList.indexOf(file);
                  const newFileList = fileList.slice();
                  newFileList.splice(index, 1);
                  return {
                    fileList: newFileList,
                  };
                });
            },
            beforeUpload: (file) => {
                console.log('beforeUpload:',file)
                this.setState((state) => ({
                  fileList: [...state.fileList, file],
                }));
                return false;
            }, 
            fileList: this.state.fileList,
        }
        

        const dragUploadProps={
            name:"drager",
            action: TEMP_SERVER_URL + "member/uploadAvatorPic",
            onRemove: (file) => {
                this.setState(({ dragFlieList }) => {
                  const index = dragFlieList.indexOf(file);
                  const newFileList = dragFlieList.slice();
                  newFileList.splice(index, 1);
                  return {
                    dragFlieList: newFileList,
                  };
                });
            },
            beforeUpload: (file) => {
                console.log('beforeUpload:',file)
                this.setState((state) => ({
                    dragFlieList: [...state.dragFlieList, file],
                }));
                return false;
            }, 
            dragFlieList: this.state.dragFlieList,
        }

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
                        <Upload {...uploadProps}>
                            <Button>
                                <Icon type="upload"/> Select File
                            </Button>
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
                        rules: [{ required: true, message: '请输入本人真实身份证号', whitespace: true}],
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
                            <Option value="大专">大专</Option>
                            <Option value="本科">本科</Option>
                            <Option value="研究生">研究生</Option>
                            <Option value="博士生">博士生</Option>
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
                    {getFieldDecorator('dropbox', {})(
                        <Upload.Dragger {...dragUploadProps}>
                            <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">点击或者拖拽文件到该区域</p>
                            <p className="ant-upload-hint">支持单个和多个文件</p>
                        </Upload.Dragger>
                    )}
                    </div>
                </FormItem>
                <FormItem {...agreeFormItemLayout }>
                    <div>
                        <Checkbox
                            onChange={this.handleAgreeRule}>
                        </Checkbox>
                        <span>
                            我已仔细阅读<Link to={'/child/membershipService/rightsAndObligations'} target="_blank">会员细则</Link>
                        </span>
                    </div>
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