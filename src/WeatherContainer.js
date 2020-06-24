import React from 'react';
import './App.css';
import moment from 'moment';
// import { Card } from 'semantic-ui-react';

class WeatherContainer extends React.Component {
  state={
    pantsNeeded: false
  }

  render(){

      let pantsNeededSayings = [
        "No Pants Needed Today!",
        "Get rid of those pants!",
        "Grab those shorts!",
        "Get those legs some sun!",
        "Throw on those shorts!"
      ]

      let randomMovieGenerator = (arr) => {
        let randomItem = arr[Math.floor(Math.random()*arr.length)];
        return randomItem;
      };
        
      // Temp Conversion
      let celsius = this.props.weatherCurrent.temperature
      let fahrenheit = Math.round(celsius*(9/5)+32)
      // let fahrenheit = 5

        return (
        <div className="WeatherContainer">
          <div class="ui card">
            <div class="content">
              <h1 class="ui header">{this.props.weatherLocation.name}</h1>
              <h1 class="header">{moment().format('LT')}</h1>
            </div>
            <div class="content">
              {/* <div class="ui small feed"> */}
                <div class="content">
                  <img src={this.props.weatherCurrent.weather_icons}/>
                  <div class="ui subheader">{fahrenheit}℉ & {this.props.weatherCurrent.weather_descriptions}</div>
                   <div class="ui subheader">{fahrenheit > 65 ? randomMovieGenerator(pantsNeededSayings) : "Ya might need some pants today :/"}</div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>  
        );
    }
}

export default WeatherContainer;