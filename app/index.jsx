import React from 'react'
import { render } from 'react-dom'

import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'
import './style/App'
import './style/Base'
import './style/Home'
import './style/Branch'
import './style/Communite'
import './style/member'

render(
    <div>
      {RootRouter}
    </div>,
    document.getElementById('root')
)
  