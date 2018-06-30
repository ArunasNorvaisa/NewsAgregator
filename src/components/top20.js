import React, { Component } from 'react';

class Top20 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            top20Items: []
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=lt&apiKey=API_KEY")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        top20Items: result.items
                    });
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
        const { error, isLoaded, top20Items } = this.state;
        if (error) {
            return <div > Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            return this.state.top20Items;
        }
    }
}

export default Top20;
