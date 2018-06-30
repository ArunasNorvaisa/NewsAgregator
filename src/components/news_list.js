import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    console.log(props.news);
    const items = props.news.articles.map((item) => {
        return (
            <NewsItem key={item.title} item={item} />
        );
    });
    return <div>{items}</div>
};

export default NewsList;
