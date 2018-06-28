import React from 'react'
import { render } from 'react-dom'

import RootRoute from './routes/RootRoute'

import './style/BaseCSS'

render(
    <div>
       {RootRoute}
    </div>,
    document.getElementById('root')
)
  