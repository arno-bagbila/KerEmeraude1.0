import React from "react";
import Homepage from "../../components/homepage/Homepage.jsx";
import Footer from "./Footer.jsx";
import LeftBorder from "./LeftBorder.jsx";
import RightBorder from "./RightBorder.jsx";
import Navbar from "./Navbar.jsx";

export default class Layout extends React.Component{
  render() {
        var contentStyle = {
            backgroundColor: "red",
            height: "100%",
            padding: "0"
        }
        var bodyStyle = {
            height: "100%"
        }
        var borderStyle = {
            backgroundColor: "grey",
            height: "100%"
        }
        var navbarStyle = {
            height: "10%",
            backgroundColor: "azure",
            width: "100%"
        }
        var homepageStyle = {
            height: "80%",
            overflowY: auto
        }
        var footerStyle = {
            height: "8%",
            backgroundColor: "azure",
            width:"100%"
        }

        var content = <Homepage />

        return(
            <div className="container-fluid" style={bodyStyle}>
                <div className="col-md-2" style={borderStyle}>
                  <LeftBorder />
                </div>
                <div className="col-md-8" style={contentStyle}>
                    <div className="my_navabar" style={navbarStyle}>
                      <Navbar />
                    </div>
                    <div style={homepageStyle}>
                        {content}
                    </div>
                    <div className="my_footer" style={footerStyle}>
                      <Footer />
                    </div>
                </div>
                <div className="col-md-2" style={borderStyle}>
                    <RightBorder />
                </div>
            </div>
            );
          }
}
