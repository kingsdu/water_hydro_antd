import React from 'react';
import { Link } from 'react-router-dom'

const NewsList = ({newsData,haveLine,type}) => {
    if (!newsData) {
        return <h3>没有数据</h3>;
    }

    const newsList = newsData.map((newsItem) =>(
        <li key={newsItem.id}>
            <Link to={'/child/detail/'+type+'/'+newsItem.id} target="_Blank">
                {newsItem.title}
            </Link>
        </li>
    ));

    return (
        haveLine ?
        <div className='newsList'>
            <ul>
                {newsList}
            </ul>
        </div>
        :
        <div className='newsList-line'>
            <ul>
                {newsList}
            </ul>
        </div>       
    )
}

export default NewsList