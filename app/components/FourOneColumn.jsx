import React, {Component} from 'react'
import VipShow from './VipShow'
import ColumnHeader from '../components/ColumnHeader'

const FourOneColumn = () => {
    return (
        <div>
            <ColumnHeader
            title='会员风采'
            id='xhxw'
            isMore={true}
            isCenter={false}/>
            <VipShow/>
        </div>
    )
}

export default FourOneColumn