import React, { Component } from 'react'
import { Pagination } from 'antd'


const Pages = ({current, total, onChange ,defaultPageSize}) => {
    return (
      <div className="Pages">
        <Pagination
          current={current}
          total={total}
          defaultPageSize={defaultPageSize}
          onChange={onChange}
        />
      </div>
    )
  }
  
  export default Pages
  