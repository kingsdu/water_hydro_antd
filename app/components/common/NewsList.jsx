import React from 'react';
import { Link } from 'react-router-dom'

import { Icon } from 'antd'

const NewsList = ({newsData,isCenter,iconType}) => {
    let type = '';
    switch(iconType){
        case '1' : type='right'
        break;
        case '2' : type='right-circle-o'
        break;
        case '3' : type='swap-right'
        break;
        case '4' : type='verticle-left'
        break;
        default: type = ''
        break;
    }


    if (!newsData) {
        return <h3>没有数据</h3>;
    }

    const newsList = newsData.map((newsItem, index) =>(
        <li key={newsItem.uniquekey}>
            <Link to={`spot/${newsItem.uniquekey}`}>
                <Icon type={type} /> {newsItem.title}
            </Link>
        </li>
    ));

    return (
        isCenter ?
        <div className='newsList-center'>
            <ul>
                {newsList}
            </ul>
        </div>
        :
        <div className='newsList'>
            <ul>
                {newsList}
            </ul>
        </div>       
    )
}

export default NewsList