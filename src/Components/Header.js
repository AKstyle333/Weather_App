import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundImage: "linear-gradient(to left, rgba(255,0,0,0), rgba(61,57,56,0.9)" }}>
                    <div className="container">
                        <Link className="navbar-brand" to="#">
                            <img src="assets/images/logo-main.png" alt="logo" width={32} height={32} className="rounded logo" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/weather">
                                        Weather
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/search">
                                        Search
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/result">
                                        Result
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
