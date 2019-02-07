import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const themeReducer = (state, action) => {
    if(!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR': 
            return {
                ...state,
                themeColor: action.themeColor
            }
        default: 
            return state
    }
} 
const store = createStore(themeReducer)

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

