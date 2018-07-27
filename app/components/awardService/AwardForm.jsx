import React, {Component} from 'react'
import { Form,Upload,Select,AutoComplete,Icon} from 'antd';
import { TEMP_SERVER_URL } from '../../config/constant/commonConstant'
import { getContentByModule,switchNameByModule,getNewsList } from '../../common/utils'
import { DEFAULT_COUNT,DEFAULT_START } from '../../config/constant/commonConstant'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
/*
奖项申报模块
*/

export default class AwardForm extends Component{
    state={
        data:null
    }
//onChange={this.selectHandleChange()
    selectHandleChange(value) {
        console.log(`selected ${value}`);
    }

    //获取type=2的新闻
    componentDidMount(){
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


    render(){
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
        
        
        return(
            <div className='awardForm_div'>
                <p className='helpInfo'>
                    说明：请在《奖项介绍》模块下载对应奖项相关附件，上传填写完毕后的附件。
                </p>
                <Select defaultValue={'请选择申报奖项'} className='select'>
                    {this.renderSelectData()}
                </Select>
                <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <FormItem
                        {...formItemLayout}
                        label="相关附件上传"
                        >
                        <div className="dropbox">
                            <Upload.Dragger name="avatar" 
                                action={''}>
                                <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">点击或者拖拽文件到该区域即可完成上传</p>
                                <p className="ant-upload-hint">支持单个和多个文件</p>
                            </Upload.Dragger>
                        </div>
                    </FormItem>
                </Form>
            </div>
        )
    }
}