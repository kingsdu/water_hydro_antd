import React, {Component} from 'react'
import Pages from '../common/page'


//分页外层控件：负责取数据
export default class PaginationBlock extends Component{
    render(){
        const {current,total,defaultPageSize,onChange} = this.props;
        return(
            <div>
                { <Pages current={current} total={Number(total)} defaultPageSize={defaultPageSize} onChange={onChange}/> }
            </div>
        )
    }

}

