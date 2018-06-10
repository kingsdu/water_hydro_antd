import React from 'react';
import {Link} from 'react-router'

const NewsList = ({newsData}) => {
    if (!newsData) {
        return <h3>没有数据</h3>;
    }

    const newsList = newsData.map((newsItem, index) =>(
        <li key={newsItem.uniquekey}>
            <Link to={`spot/${newsItem.uniquekey}`}>
                {newsItem.title}
            </Link>
        </li>
    ));


    return (
        <div className='newsList'>
            <ul>
                {newsList}
            </ul>
        </div>
    )
}

export default NewsList