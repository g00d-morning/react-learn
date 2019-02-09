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
      <WingBlank>
        <Carousel
        style={{width: '375px', height: '80px'}}
          autoplay={false}
          infinite={true}
          dotActiveStyle={{color: 'green', width: '16px', "border-radius": '3px',border: 0}}
          dotStyle={{color: 'red',backgroundColor:'rgba(0,0,0,0)',width: '6px', height: '6px',border: 'solid 1px red'}}
          // beforeChange={() => {console.log('1111')}}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <div style={{height: 100+'px',width: 375+'px',backgroundColor: 'blue'}} key={val}><h1>{val}</h1></div>
          ))}
        </Carousel>
        </WingBlank>
    );
  }
}

