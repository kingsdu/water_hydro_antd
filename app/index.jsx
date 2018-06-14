import React from 'react'
import { render } from 'react-dom'

import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'
import './style/App'
import './style/Base'
import './style/Home'
import './style/Branch'

render(
    <div>
      {RootRouter}
    </div>,
    document.getElementById('root')
)
  