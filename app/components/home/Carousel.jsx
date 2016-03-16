import React from "react";

export default class Carousel extends React.Component{
    render(){
        return(
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src={"images/home/benicadell_500_1200.jpg"}  />
                    </div>
                    <div className="item">
                        <img src={"images/home/calpe_500_1200.jpg"}  />
                    </div>
                    <div className="item">
                        <img src={"images/home/villalonga1_500_1200.jpg"}  />
                    </div>
                    <div className="item">
                        <img src={"images/home/villalonga2_500_1200.jpg"}  />
                    </div>
                </div>
            </div>
        )
    }
}