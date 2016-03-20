import React from "react";
import $ from "jquery";

export default class Weather extends React.Component{
    constructor(){
        super();
        this.state = {
            cityName:"Ador",
            temperature:"",
            date:"",
            description:"",
            code:"",
            imgUrl:""
        }
    }
    
    fahrenheitToCelcius(temperatureInFarenheit){
        return Math.round((temperatureInFarenheit - 32) * (5 / 9));
    }
    
    getWeatherData(){
        $.ajax({
            url: this.props.url,
            dataType:"json",
            success:(data) => {
                this.setState({
                    cityName:data.query.results.channel.location.city,
                    temperature: this.fahrenheitToCelcius(data.query.results.channel.item.condition.temp),
                    date:data.query.results.channel.item.condition.date,
                    description:data.query.results.channel.item.condition.text,
                    imgUrl:"http://l.yimg.com/a/i/us/we/52/" + data.query.results.channel.item.condition.code + ".gif"
                });
            }, 
            error:(xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }   
        });
    }
    
    
    componentDidMount(){
        this.getWeatherData();
    }
    
    render(){
        return(
            <div className = "weatherBox">
                <div>{this.state.cityName}</div><br />
                {this.state.date}<br/>
                {this.state.description}<br />
                <img src={this.state.imgUrl}  /><span><div>{this.state.temperature}</div></span>
            </div>
        );
    }
}