import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor () {
    super()
    this.state = {
      username:　'',
      content: '',
    }
  } 
  componentWillMount () {
    this._loadUsername()
  }
  componentDidMount () {
    this.textarea.focus()
  }
  _loadUsername () {
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({username})
    }
  }
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }
  handleUsernameBlur (event) {    //监听用户名输入框失去焦点的事件
    this._saveUsername(event.target.value)
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handleConetntChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit() {
    if (this.props.onSubmit) {     //方法会判断 props 中是否传入了 onSubmit 属性
      const { username, content } = this.state
      this.props.onSubmit({
        username,
        content,
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
