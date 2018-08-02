import React, {Component} from 'react'
import { Form,Upload,Select,AutoComplete,Icon,Button,Alert} from 'antd';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'
import { getContentByModule,switchNameByModule,getNewsList } from '../../common/utils'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'

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

    selectHandleChange(value) {
        console.log(`selected ${value}`);
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
                this.setState({
                    data: data.Data
                }); 
            }      
       })
    }

    renderSelectData(){
        const option = this.state.data&&this.state.data.map(
            item =>(
                <Option value={item.title}>{item.title}</Option>
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
                console.log("values",values)     
                // const formData = new FormData();  
                // formData.append("account",values.account);
                this.state.successTip = true
                this.state.dragFlieList = []
                this.getDataFromServer()
                // this.setState()successTip
                // axios.post(TEMP_SERVER_URL + "member/uploadAvatorPic", formData).then( res => {
                //     if(res.data.Result === 'success'){
                //         this.props.form.resetFields()
                //     }
                // }).catch( err => console.log(err))
            }
        });
    }


    renderSuccessLabel(){
        return(
            <div className='label_div'>
                <label className='label_help'>提交成功</label>
            </div>
        )
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
                            rules: [{ required: true, message: '请选择学历', whitespace: true }],
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