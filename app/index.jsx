import React from 'react'
import { render } from 'react-dom'

import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'
import './style/App'
import './style/Base'
import './style/Home'
import './style/ColumnHeader'
import './style/NewsList'
import './style/Member'

render(
    <div>
      {RootRouter}
    </div>,
    document.getElementById('root')
)
  