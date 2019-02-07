import React, { Component } from 'react'

export default class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username:　'',
      content: '',
    }
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
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-filed">
          <label htmlFor="username" className="comment-filed-label">用户名:</label>
          <input id="username" value={this.state.username} type="text" onChange={this.handleUsernameChange.bind(this)} />
        </div>

        <div className="comment-filed">
          <label htmlFor="content" className="comment-filed-label">评论内容:</label>
          <textarea id="content" value={this.state.content}  type="text" onChange={this.handleConetntChange.bind(this)} />
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
