import React from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer';

class Main extends React.Component {
  state={
    weatherLocation: [],
    weatherCurrent: [],
    weatherForecast: []
  }

  componentDidMount(){
    fetch("http://api.weatherstack.com/forecast?access_key=9830f12c47f4e3ef829a1dceacf83261&query=New York")
    .then(resp=>resp.json())
    .then(data => this.setState({weatherLocation: data.location, weatherCurrent: data.current, weatherForecast: data.forecast }))
  }
  
  
  render(){
    return (
      <div className="Main">
        {/* <h1 id="app-title">The "Do I actually NEED to wear pants today?" Weather Main</h1> */}
        <WeatherContainer 
          weatherLocation={this.state.weatherLocation}
          weatherCurrent={this.state.weatherCurrent}
          weatherForecast={this.state.weatherForecast}
          /> 

      </div>
    );
  }
}

export default Main;