import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Top from './components/virsus';
import Header from './components/header';
import NewsList from './components/news_list';
import Top20 from './components/top20'
import Footer from './components/footer';
import JSON from './db.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    searchNews(keywords) {
        let filtered = this.state.news.articles.filter((item) => {
            return item.description.indexOf(keywords) > 0;
        });
        this.setState({filtered: { articles: filtered }});
    }

    render() {
        return (
            <div className="container">
                <Top />
                <Header newsSearch={keywords => this.searchNews(keywords)} />
                <NewsList news={this.state.filtered} />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
