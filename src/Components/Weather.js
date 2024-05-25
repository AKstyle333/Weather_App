import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";
import axios from "axios";
import Recent from "./Recent";

export class Weather extends Component {
    constructor() {
        super();

        this.state = {
            lat: "",
            lon: "",
            city: "",
            minTemp: "",
            maxTemp: "",
            sunRise: "",
            sunSet: "",
            weatherData: null,
            loading: false,
            recent: [],
        };
    }

    inputChangeHandler = (e) => {
        console.log(e.target.name);
        const name = e.target.name;

        if (name === "city") {
            this.setState({
                city: e.target.value,
            });
        } else if (name === "lat") {
            this.setState({
                lat: e.target.value,
            });
        } else if (name === "lon") {
            this.setState({
                lon: e.target.value,
            });
        } else {
            console.log("Name not Valid");
        }
    };
    locationChangeHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    console.log(res);
                    setTimeout(() => {
                        this.setState({
                            lat: res.coords.latitude,
                            lon: res.coords.longitude,
                        });

                        const { latitude, longitude } = res.coords;
                        axios
                            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f7a0703252d2595a5ce1a2a8a7c2d3db`)
                            .then((res) => {
                                console.log(res);
                                this.setState(
                                    {
                                        feelsLike: Math.round(res.data.main.feels_like - 273.15) + "°C", //K to C
                                        tempMin: Math.round(res.data.main.temp_min - 273.15) + "°C", //K to C
                                        tempMax: Math.round(res.data.main.temp_max - 273.15) + "°C",
                                        city: res.data.name,
                                        weatherData: res.data,
                                        loading: false,
                                    },
                                    () => {
                                        this.recentDataHandler();
                                    }
                                );
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }, 1500);
                },
                (err) => {
                    console.log(err);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };
    searchHandler = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=f7a0703252d2595a5ce1a2a8a7c2d3db`)
            .then((res) => {
                console.log(res);
                this.setState(
                    {
                        feelsLike: Math.round(res.data.main.feels_like - 273.15) + "°C", //K to C
                        tempMin: Math.round(res.data.main.temp_min - 273.15) + "°C", //K to C
                        tempMax: Math.round(res.data.main.temp_max - 273.15) + "°C",
                        city: res.data.name,
                        weatherData: res.data,
                    },
                    () => {
                        this.recentDataHandler();
                    }
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };
    recentDataHandler = () => {
        const Recent = this.state.recent;
        Recent.push({
            city: this.state.city,
            lat:this.state.lat,
            lon:this.state.lon
        });
        this.setState({
            Recent,
        });
    };
    researchHandler = (lat, lon) => {

        this.setState({
            lat: lat,
            lon: lon
        })
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7a0703252d2595a5ce1a2a8a7c2d3db`)
            .then((res) => {
                console.log(res);
                this.setState(
                    {
                        feelsLike: Math.round(res.data.main.feels_like - 273.15) + "°C", //K to C
                        tempMin: Math.round(res.data.main.temp_min - 273.15) + "°C", //K to C
                        tempMax: Math.round(res.data.main.temp_max - 273.15) + "°C",
                        city: res.data.name,
                        weatherData: res.data,
                        loading: false,
                    },
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <>
                <Search
                    lat={this.state.lat}
                    lon={this.state.lon}
                    city={this.state.city}
                    change={this.inputChangeHandler}
                    location={this.locationChangeHandler}
                    search={this.searchHandler}
                    tempMax={this.state.tempMax}
                    tempMin={this.state.tempMin}
                    feelsLike={this.state.feelsLike}
                    weatherData={this.state.weatherData}
                    loading={this.state.loading}
                />
                <Result
                    lat={this.state.lat}
                    lon={this.state.lon}
                    city={this.state.city}
                    change={this.inputChangeHandler}
                    location={this.locationChangeHandler}
                    search={this.submitHandler}
                    tempMax={this.state.tempMax}
                    tempMin={this.state.tempMin}
                    feelsLike={this.state.feelsLike}
                    weatherData={this.state.weatherData}
                    loading={this.state.loading}
                />
                <Recent recent={this.state.recent} research={this.researchHandler} />
            </>
        );
    }
}

export default Weather;
