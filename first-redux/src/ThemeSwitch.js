import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export default class ThemeSwitch extends Component {
  render() {
    return (
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>
    )
  }
}
