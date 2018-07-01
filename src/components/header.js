import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.startSearch = this.startSearch.bind(this);
    }

    startSearch(event) {
        event.preventDefault();
        const input = document.getElementById("forma").elements["searchString"].value;
        this.setState({keywords:input});
        this.props.newsSearch(input);
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
                                    <a className="nav-link active" href="http://yahoo.com" target="_top">Top-20</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://yahoo.com" target="_top">Verslas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://yahoo.com" target="_top">Pramogos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://yahoo.com" target="_top">Sportas</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-xl-0 ml-auto" onSubmit={this.startSearch} id="forma">
                                <input className="form-control mr-sm-2" type="text" placeholder="Paieška"
                                       aria-label="Search" name="searchString" />
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
