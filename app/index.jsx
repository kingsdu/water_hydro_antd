import React from 'react'
import { render } from 'react-dom'

import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'
import './style/App'
import './style/Base'
import './style/Home'
import './style/Branch'
import './style/member'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


render(
    <div>
      {RootRouter}
    </div>,
    document.getElementById('root')
)
  