import React, { Component } from "react";

export class Home extends Component {
    render() {
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                    <img src="assets/images/logo-main.png" alt="logo" width={280} height={280} className="rounded logo" />
                </div>
            </>
        );
    }
}

export default Home;
