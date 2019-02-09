import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import Carousel from './components/carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary" className="testButton">click me</Button>
        <Carousel />
      </div>
    );
  }
}

export default App;
