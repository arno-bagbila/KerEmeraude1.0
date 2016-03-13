import "./main.css";
import React from "react";
import Layout from "./components/layout/Layout.jsx";
import{Router, Route, browserHistory, IndexRoute} from "react-router";
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Ador from "./components/ador/Ador.jsx";


export default class App extends React.Component{
  render(){
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="ador" component={Ador} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>
    )
  }
}
