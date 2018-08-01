import React from 'react';
import { Breadcrumb } from 'antd';

export default class BreadcrumbCustom extends React.Component {
    render(){
        let lis = this.props.pathList.map(function(item,index){
            return(
                <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            );
        });
      
        return(
        <Breadcrumb>
            {lis}
        </Breadcrumb>
        )
    }
}