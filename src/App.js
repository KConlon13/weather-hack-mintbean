import React from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer';
import PantsImage from './PantsPic.jpg'
import Main from './Main'

class App extends React.Component {

  
  render(){
    return (
      <div className="App">
        {/* <h1 id="app-title">The "Do I actually NEED to wear pants today?" Weather App</h1> */}
        {/* <img id="background" src={PantsImage}/> */}
        <Main/>
      </div>
    );
  }
}

export default App;
