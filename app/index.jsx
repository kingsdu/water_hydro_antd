import React from 'react'
import { render } from 'react-dom'

import RootRoute from './routes/RootRoute'

import './style/BaseCSS'
import './style/HomeCSS'

render(
    <div>
       {RootRoute}
    </div>,
    document.getElementById('root')
)
  