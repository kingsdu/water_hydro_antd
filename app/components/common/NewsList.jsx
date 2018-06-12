import React from 'react';
import {Link} from 'react-router'

import { Icon } from 'antd'

const NewsList = ({newsData,isCenter,iconType}) => {
    let type = 'right';
    switch(iconType){
        case '1' : type='right'
        break;
        case '2' : type='right-circle'
        break;
        case '3' : type='swap-right'
        break;
        default: type='right'
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