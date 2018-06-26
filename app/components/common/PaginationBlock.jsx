import React, {Component} from 'react'
import {Row, Col } from 'antd'
import { getInfoCount } from '../../common/utils'
import Pages from '../common/page'
import { getContentByModule } from '../../common/utils'


//分页外层控件：负责取数据
export default class PaginationBlock extends Component{
    render(){
        const {current,total,defaultPageSize,onChange} = this.props;
        return(
            <div>
                { <Pages current={current} total={total} defaultPageSize={defaultPageSize} onChange={onChange}/> }
            </div>
        )
    }

}

