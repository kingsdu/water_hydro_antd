import React, {Component} from 'react'
import { Form,Upload,Select,AutoComplete,Icon,Button,Alert,message} from 'antd';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'
import { getContentByModule,switchNameByModule,getNewsList } from '../../common/utils'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'
import axios from 'axios';


const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
/*
奖项申报模块
*/

class AwardForm extends Component{
    state={
        data:null,
        dragFlieList:[],
        successTip:false,
    }

    //获取type=2的新闻
    componentDidMount(){
        this.getDataFromServer()
    }

    getDataFromServer(){
        const module = this.props.module;
        const data = getContentByModule(DEFAULT_START,DEFAULT_COUNT,module);
        data.then((data)=>{
            if(data.Result == 'success'){
                console.log("data",data);
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    successInfo = () =>{
        message.info('上传成功，请等待审批！');
    }


    errorInfo = () =>{
        message.info('上传失败，请联系管理员！');
    }

    renderSelectData(){
        const option = this.state.data&&this.state.data.map(
            item =>(
                <Option value={item.id}>{item.title}</Option>
            )
        )
        return option
    }

    /**
     * 表单提交
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {      
                const formData = new FormData();  
                console.log("values",values)
                formData.append("award_id",values.education);
                formData.append("appendix",values.appendix.file,values.appendix.file.name);
                axios.post(TEMP_SERVER_URL + "AwardInfos/applyAward", formData).then( res => {
                    if(res.data.Result === 'success'){
                        this.successInfo()
                        this.props.form.resetFields()
                    }else{
                        console.log("res.data",res.data)
                        this.errorInfo()
                    }
                }).catch( err => console.log(err))
            }
        });
    }


    render(){
        const { getFieldDecorator } = this.props.form;
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
                this.setState((state) => ({
                    dragFlieList: [...state.dragFlieList, file],
                }));
                return false;
            }, 
            dragFlieList: this.state.dragFlieList,
        }
        
        return(
            <div className='awardForm_div'>
                <Alert className='helpInfo'
                    message="操作说明"
                    description="请在《奖项介绍》模块下载对应奖项相关附件，上传填写完毕后的附件。"
                    type="info"
                    showIcon/>
                <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <FormItem
                        {...formItemLayout}
                        label="申报奖项"
                        >
                        {getFieldDecorator('education',{
                            rules: [{ required: true, message: '请选择申报奖项'}],
                        })(
                            <Select
                                placeholder={'请选择申报奖项'}
                                style={{ width: 200 }}>
                                {this.renderSelectData()}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="相关附件上传"
                        >
                        <div className="dropbox">
                        {getFieldDecorator('appendix', {})(
                            <Upload.Dragger {...dragUploadProps}>
                                <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">点击或者拖拽文件到该区域</p>
                            </Upload.Dragger>
                        )}
                        </div>
                    </FormItem>
                    {this.state.successTip ? this.renderSuccessLabel():null}
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(AwardForm);