import React, { Component } from 'react'
import leftList from './TempData';
import Scroll from "../scroll/Scroll"
import LazyLoad, { forceCheck } from "react-lazyload";


import './Menu.scss'



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.testRef = React.createRef();
        this.state = {
            loading: true,
            rankingList: [],
            refreshScroll: false
        };
    }
    componentDidMount() {
        
    }
    getDetail(event) {
        event.preventDefault()
        console.log(event);
        // console.log(event.currentTarget);
        // console.log(event.target);
        // console.log(this.ref.getBoundingClientRect())
        console.log(this.testRef.current.childNodes[event.currentTarget.dataset.ikey].getBoundingClientRect().top)
        console.log('----------')
        console.log(event.currentTarget.dataset.ikey)
    }
    render() {
        //   let { match, route } = this.props;
        return (
            <div className="out-wrapper">
                <Scroll refresh={this.state.refreshScroll}
                onClick={{}}
                    onScroll={() => { console.log('调用滚动函数及forceCheck'); forceCheck(); }}
                    
                     >
                    <div className={`in-wrapper`} ref={this.testRef}>
                        {
                            leftList.map((item, index) => {
                                return (
                                    <div className={`in-in-wrapper `} key={index}
                                    data-ikey={index}
                                    onClick={(e) => {this.getDetail(e)}}
                                    >
                                        <div >
                                            <LazyLoad height={100}>
                                                <img src={item.blockSrc} alt={item.blockName} />
                                            </LazyLoad>
                                        </div>
                                        <div className="name">{item.blockName}</div>
                                    </div>
                                    
                                );
                            })
                        }
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default Menu
