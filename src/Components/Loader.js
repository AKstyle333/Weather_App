import React, { Component } from "react";
import RingLoader from "react-spinners/RingLoader";

export class Loader extends Component {
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-center my-5">
                    <RingLoader color="rgba(61,57,56,0.9)" size={133} />
                </div>
            </div>
        );
    }
}

export default Loader;
