import React, { Component } from 'react';
import NewsList from './news_list';

class RenderedNews extends Component {
    constructor(props) {
        super(props);
        this.filterNews = this.filterNews.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            top20Items: { articles: [] }
        };
    }

    filterNews() {
        return {
            articles: this.state.top20Items.articles.filter((item) => {
                return item.description.indexOf(this.props.keywords) > -1;
            })
        }
    }

    loadNews(newsURL) {
        this.setState({isLoaded: false});

        fetch(newsURL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        top20Items: {
                            articles: result.articles.map((item) => {
                                if (!item.urlToImage) {
                                    item.urlToImage = 'http://arunas.org/images/no-image.png';
                                }
                                if (!item.description) {
                                    item.description = 'Pilną straipsnio tekstą ';
                                }
                                return item;
                            })
                        }
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentWillReceiveProps(newProps) {
        this.loadNews(newProps.newsURL);
    }

    componentDidMount() {
        this.loadNews(this.props.newsURL);
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div > Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Naujienos kraunasi... </div>;
        } else {
            return <NewsList news={ this.filterNews() } />;
        }
    }
}

export default RenderedNews;
