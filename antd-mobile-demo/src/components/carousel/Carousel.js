import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'

export default class Swiper extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3', '4', '5', '6'],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={false}
          infinite
          slideWidth="600px"
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <div style={{height: 100+'px',width: 300+'px',backgroundColor: 'blue'}} key={val}><h1>{val}</h1></div>
          ))}
        </Carousel>
    );
  }
}

