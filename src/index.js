import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Top from './components/virsus';
import Header from './components/header';
import Top20 from './components/top20';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: ''
        }
    }

    searchNews(keywords) {
        this.setState({keywords});
    }

    render() {
        return (
            <div className="container">
                <Top />
                <Header newsSearch={keywords => this.searchNews(keywords)} />
                <Top20 keywords={this.state.keywords}/>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
