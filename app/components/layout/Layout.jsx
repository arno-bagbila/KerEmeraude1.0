import React from "react";
import Footer from "./Footer.jsx";
import LeftBorder from "./LeftBorder.jsx";
import RightBorder from "./RightBorder.jsx";
import Navbar from "./Navbar.jsx";

export default class Layout extends React.Component{
  render() {
      
        return(
            <div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8 navbarBox">
                            <Navbar />
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="col-md-2">
                            <LeftBorder/>
                        </div>
                        <div className="col-md-8 contentBox">
                            {this.props.children}
                        </div>
                        <div className="col-md-2">
                            <RightBorder/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8 footerBox">
                            <Footer />
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
                
            </div>
            );
          }
}
