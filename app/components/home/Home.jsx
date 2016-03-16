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
                    <Weather />
                    <HomeAbout />
                </div>
                <div className="col-md-6">
                    <Map />
                </div>
            </div>
        </div>
      </div>
    );
  }
}
