import React from "react";

export default class Map extends React.Component{
    render(){
        return(
            <div>
                <img src={"https://maps.googleapis.com/maps/api/staticmap?center=Ador,ES&zoom=9&size=600x300&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318%20&markers=color:red%7Clabel:C%7C40.718217,-73.998284%20&key=AIzaSyAhj7F8ChPW3F4uTHEL8L3_NPk1UDJI0Tk"} />
            </div>
        )
    }
}