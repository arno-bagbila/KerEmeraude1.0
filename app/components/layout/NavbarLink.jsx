import React from "react";
import {Link} from "react-router";

export default class NavbarLink extends React.Component{
    render(){
        return <Link {...this.props} activeClassName="active"/>
    }
}