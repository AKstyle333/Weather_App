import React, { Component } from "react";
import Loader from "./Loader";

export class Result extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }
    render() {
        let { weatherData: wdata } = this.props;
        const ktoc = (k) => {
            return (k - 273.15).toFixed(2) + "°C";
        };
        const getTime = (time) => {
            const date = new Date(time * 1000);
            return date.toLocaleTimeString();

            // OR
            // return  new Date(time * 1000).toLocaleTimeString();
        };
        let showData;
        if (this.props.weatherData === null) {
            if (this.props.loading === true) {
                showData = <Loader />;
            } else {
                showData = "";
            }
        } else {
            showData = (
                <div className="container my-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" name="weatherLogo" className="d-flex align-items-center">
                                    <img src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`} alt="" width={32} height={32} />
                                    <span>{wdata.weather[0].description}</span>
                                </th>
                                <th scope="col" name="city">
                                    {this.props.city}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Feels Like</th>
                                <td name="feelsLike">{ktoc(wdata.main.feels_like)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Min. Temp</th>
                                <td name="minTemp">{ktoc(wdata.main.temp_min)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Max. Temp</th>
                                <td name="maxTemp">{ktoc(wdata.main.temp_max)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sun Rise</th>
                                <td name="sunRise">{getTime(wdata.sys.sunrise)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sun Set</th>
                                <td name="sunSet">{getTime(wdata.sys.sunset)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        return <>{showData}</>;
    }
}

export default Result;
