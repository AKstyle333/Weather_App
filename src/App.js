import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather";
import Home from "./Components/Home";
// import Search from "./Components/Search";
// import Result from "./Components/Result";
import Header from "./Components/Header";
// import Loader from "./Components/Loader";

export class App extends Component {
    render() {
        return (
            <>
                <Header />
                {/* <Loader /> */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/weather" element={<Weather />}></Route>
                    {/* <Route path="/search" element={<Search />}></Route>
                    <Route path="/result" element={<Result />}></Route> */}
                </Routes>
            </>
        );
    }
}

export default App;
