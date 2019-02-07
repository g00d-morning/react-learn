import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      username: props.username, // 从 props 上取 username 字段
      content: ''
    }
  }

  componentDidMount () {
    this.textarea.focus()
  }

  handleUsernameBlur (event) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-filed">
          <label htmlFor="username" className="comment-filed-label">用户名:</label>
          <input id="username" value={this.state.username} type="text" 
          onBlur={this.handleUsernameBlur.bind(this)}
          onChange={this.handleUsernameChange.bind(this)} />
        </div>

        <div className="comment-filed">
          <label htmlFor="content" className="comment-filed-label">评论内容:</label>
          <textarea id="content" value={this.state.content}  
          type="text" onChange={this.handleConetntChange.bind(this)} 
          ref={(textarea) => this.textarea = textarea }/>
        </div>

        <div className="comment-field-button">
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
        
      </div>
    )
  }
}