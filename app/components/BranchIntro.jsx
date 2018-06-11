import React, {Component} from 'react'
import NewsList from './NewsList';

import ColumnHeader from '../components/ColumnHeader'
import NewsListBlock from '../components/NewsListBlock'

export default class BranchIntro extends Component{
    render(){
        const {title,id,isMore} = this.props
        return(
            <div>
                <ColumnHeader
                 title={title}
                 id={id}
                 isMore={isMore}
                 isCenter={false}/>
                 <NewsListBlock isCenter={false}/>
            </div>
        )
    }
}