import React from "react";

export default class Homepage extends React.Component{
  render(){
    return (
      <div>
        <div className="row">
            <div className="container-fluid">
                <h3>Carousel</h3>
            </div>
        </div>
        <div className="row">
            <div className="container-fluid">
                <div className="col-md-6">
                    <h3>
                        Weather
                        About
                    </h3>
                </div>
                <div className="col-md-6">
                    <h3>Map</h3>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
