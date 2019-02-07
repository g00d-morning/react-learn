import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
      <div className="comment-user">
        <span>{this.props.comment.username}</span>
      </div> 
      <div className="comment-content">
        <p>{this.props.comment.content}</p>
      </div>
      </div>
    )
  }
}
