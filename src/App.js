import React from 'react';
import './App.css';
import Main from './Main'

class App extends React.Component {

  
  render(){
    return (
      <div className="App">
        {/* <h1 id="app-title">The "Do I actually NEED to wear pants today?" Weather App</h1> */}
        {/* <img id="background" src={PantsImage}/> */}
        <h1 id="site-title">The "Do I need to wear pants today?" Weather Service</h1>
        <Main/>
      </div>
    );
  }
}

export default App;
