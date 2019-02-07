import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
  handleDeleteComment(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
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
           <Comment comment={comment} key={index} index={index} 
                    onDeleteComment={this.handleDeleteComment.bind(this)}/>
          )
        }
        
      </div>
    )
  }
}
