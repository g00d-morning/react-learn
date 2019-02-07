import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
  render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]
    return (
      <div>
        {
          this.props.comments.map((comment, index) => 
            // return (
            //   <div key={index}>{comment.username}:{comment.content}</div>
            // )
           <Comment comment={comment} key={index} />
          )
        }
        
      </div>
    )
  }
}
