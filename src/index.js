import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Top from './components/virsus';
import Header from './components/header';
import RenderedNews from './components/renderedNews';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: '',
            newsURL: 'https://newsapi.org/v2/top-headlines?country=lt&apiKey=API_KEY'
        }
    }

    searchNews(keywords) {
        this.setState({keywords: keywords});
    }

    setURL(newsCategory) {
        switch (newsCategory) {
            case 'business':
                this.setState({newsURL:'https://newsapi.org/v2/top-headlines?country=lt&category=business&apiKey=API_KEY'});
                break;
            case 'entertainment':
                this.setState({newsURL:'https://newsapi.org/v2/top-headlines?country=lt&category=entertainment&apiKey=API_KEY'});
                break;
            case 'sports':
                this.setState({newsURL:'https://newsapi.org/v2/top-headlines?country=lt&category=sports&apiKey=API_KEY'});
                break;
            default:
                this.setState({newsURL:'https://newsapi.org/v2/top-headlines?country=lt&apiKey=API_KEY'});
                break;
        }
    }

    render() {
        return <div className="container">
            <Top/>
            <Header newsSearch={keywords => this.searchNews(keywords)} url={category => this.setURL(category)}/>
            <RenderedNews keywords={this.state.keywords} newsURL={this.state.newsURL}/>
            <Footer/>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
