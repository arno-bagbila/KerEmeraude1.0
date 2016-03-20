import "./homeStyle.css";
import React from "react";
import Carousel from "./Carousel.jsx";
import Weather from "./Weather.jsx";
import Map from "./Map.jsx";
import HomeAbout from "./HomeAbout.jsx";

export default class Homepage extends React.Component{
  render(){
    return (
      <div>
        <div className="row">
            <div className="container-fluid">
                <Carousel />
            </div>
        </div>
        <div className="row">
            <div className="container-fluid">
                <div className="col-md-6">
                    <Weather url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22ador%2C%20esp%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" />
                    <HomeAbout />
                </div>
                <div className="col-md-6 mapBox">
                    <Map />
                </div>
            </div>
        </div>
      </div>
    );
  }
}
