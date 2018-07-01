import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.startSearch = this.startSearch.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state = {
            keywords: '',
            newsCategory: 'top20',
            inputValue: ''
        }
    }

    startSearch(event) {
        event.preventDefault();
        this.setState({keywords: this.state.inputValue});
        this.props.newsSearch(this.state.inputValue);
    }

    categoryChange(event) {
        this.props.newsSearch('');
        this.setState({newsCategory: event.target.id, keywords: '', inputValue: ''});
        this.props.url(event.target.id);
    }

    inputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand kvadratas" href="index.html">NA</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#baras"
                                aria-controls="baras" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="baras">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <div id="top20" className="nav-link" onClick={this.categoryChange}>Top-20</div>
                                </li>
                                <li className="nav-item">
                                    <div id="business" className="nav-link" onClick={this.categoryChange}>Verslas</div>
                                </li>
                                <li className="nav-item">
                                    <div id="entertainment" className="nav-link" onClick={this.categoryChange}>Pramogos</div>
                                </li>
                                <li className="nav-item">
                                    <div id="sports" className="nav-link" onClick={this.categoryChange}>Sportas</div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-xl-0 ml-auto" onSubmit={this.startSearch} id="forma">
                                <input className="form-control mr-sm-2" type="text" placeholder="Paieška"
                                       aria-label="Search" name="searchString" onChange={this.inputChange}
                                       value={this.state.inputValue} />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Paieška
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
