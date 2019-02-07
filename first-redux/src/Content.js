import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends Component {
  render() {
    return (
      <div>
        <p>内容</p>
        <ThemeSwitch/>
      </div>
    )
  }
}
