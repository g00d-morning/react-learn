import React, { Component } from 'react';
import Button from 'antd/lib/button'
import { Carousel } from 'antd'
import "./App.css"

const swiperList = ['http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_cb8d8d64ca2443b8a9739aea05886268.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_26994272adab4819825129a63552180f.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_88a42afad1c94b8c9b23a94d86d9a502.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_0aaadc9e1ac744c0813b8aa96e0f348e.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_405c64da08df4eb8afe2f73075ee4760.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_3d45583fd05640c8bc64387d08b19199.jpg']

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary" >antd按钮</Button>
        <Carousel autoplay>
        {swiperList.map((item,index) => {
          return <div><img src={item} alt={index} style={{background: "cover",height: 160+"px"}}/></div>
        })}
          {/* <div><h3>hellow</h3></div>
          <div><h3>good</h3></div>
          <div><h3>hello antd!</h3></div>
          <div><h3>hey</h3></div> */}
        </Carousel>, mountNode
      </div>
    );
  }
}

export default App;
