import React, {Component} from 'react'
import ColumnHeader from '../components/ColumnHeader'

import ScienceDomain from '../components/ScienceDomain'

const FourTwoColumn = () => {
    return (
        <div>
             <ColumnHeader
                title='科普乐园'
                id='xhxw'
                isMore={true}
                isCenter={false}/>
                <ScienceDomain/>
        </div>
    )
}

export default FourTwoColumn