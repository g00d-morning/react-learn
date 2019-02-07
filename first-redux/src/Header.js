import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default class Header extends Component {
  static propTypes = {
    themeColor:　PropTypes.string
  }
  render() {
    return (
      <div>
        <h1 style={{color: this.props.themeColor}}>头部文件</h1>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateProps)(Header)   // 高阶组件,封装一下,提供更强的功能
