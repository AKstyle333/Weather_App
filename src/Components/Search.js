import React, { Component } from "react";

export class Search extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }
    render() {
        let { weatherData: wdata } = this.props;
        console.log(wdata);
        return (
            <>
                <div className="container-fluid" style={{ backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(173,144,111,1))" }}>
                    <div className="row container mx-auto align-items-center py-5 rounded">
                        <div className="col-6 form-container">
                            <form className="">
                                <div className="mb-3">
                                    <label className="form-label">Enter City Name</label>
                                    <input type="text" className="form-control" name="city" placeholder="Enter City Name" value={this.props.city} onChange={this.props.change} />
                                </div>
                            </form>
                            <div className="d-flex align-items-center justify-content-center">
                                <span>OR</span>
                            </div>
                            <form className="">
                                <div className="d-flex align-items-center ">
                                    <span>Get Co-Ordinate</span>
                                    <button type="submit" className="btn " onClick={this.props.location}>
                                        <i className="bi bi-crosshair2"></i>
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Latitude:</label>
                                    <input type="text" inputMode="numeric" className="form-control" name="lat" placeholder="Enter Latitude" value={this.props.lat} onChange={this.props.change} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Longitude:</label>
                                    <input type="text" inputMode="numeric" className="form-control" name="lon" placeholder="Enter Longitude" value={this.props.lon} onChange={this.props.change} />
                                </div>
                                <div className="d-flex align-items-center ">
                                    <span>Search</span>
                                    <button type="submit" className="btn " onClick={this.props.search}>
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-6 position-relative pe-0">
                            <img src="assets/images/bird-banner.png" alt="" className="rounded bird-banner ms-auto d-block" width={400} height={400} />
                            <div className="position-absolute set-position">
                                <form className="bg-img-form">
                                    <input type="" className="form-control" name="city" value={this.props.city} disabled />
                                    <input type="" className="form-control" name="lat" value={this.props.lat} disabled />
                                    <input type="" className="form-control" name="lon" value={this.props.lon} disabled />
                                    <input type="" className="form-control" name="feelsLike" value={this.props.feelsLike} disabled />
                                    <input type="" className="form-control" name="tempMin" value={this.props.tempMin} disabled />
                                    <input type="" className="form-control" name="tempMAx" value={this.props.tempMax} disabled />
                                    {/* <input type="" className="form-control" name="desc" value={wdata.weather[0].description} disabled /> */}
                                    {/* <img src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`} alt="" width={32} height={32} /> */}
                                    {/* <span>{wdata.weather[0].description}</span> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;
