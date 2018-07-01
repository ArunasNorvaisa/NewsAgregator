import React, { Component } from 'react';
import NewsList from './news_list';

class Top20 extends Component {
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

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=lt&apiKey=API_KEY")
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

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div > Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Naujienos kraunasi... </div>;
        } else {
            return <NewsList news={this.filterNews()} />;
        }
    }
}

export default Top20;
