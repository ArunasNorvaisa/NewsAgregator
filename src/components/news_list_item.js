import React from 'react';

const NewsItem = (props) => {
    const publishedAt = new Date(props.item.publishedAt);
    if (!props.item.urlToImage) {
        props.item.urlToImage = 'http://arunas.org/images/no-image.png';
    }
    if (!props.item.description) {
        props.item.description = 'Pilną straipsnio tekstą ';
    }
    return (
        <div className="newsItem">
            <img src={ props.item.urlToImage } className="newsImage" alt={ props.item.title } />
            <h3>{ props.item.title }</h3>
            <span className="newsTime">{ publishedAt.toLocaleString('lt-LT') }</span>
            <span className="newsSource">{ props.item.source.name }</span>
            <hr />
            <div className="newsDescription">{ props.item.description }
                <a href={ props.item.url } target="_top">...skaitykite toliau</a>
            </div>
        </div>
    );
};

export default NewsItem;
