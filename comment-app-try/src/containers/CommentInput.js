import React, { Component} from 'react'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'
import PropTypes from 'prop-types'


class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }

  constructor () {
    super()
    this.state = { username: '' }
  }

  componentWillMount () {
    this._loadUsername()
  }

  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  _saveUsername (username) {
    localStorage.setItem('username', username)
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render () {
    return (
      <CommentInput           //这里面写的三个username\onUserNameInputBlur\onSubmit会当做props传给CommentInput组件
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)} />
    )
  }
}

//mapStateToProps 这个会合并到props
const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
//mapDispatchToProps 这个也会合并到props
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {           //onSubmit就是进行分发action操作
      dispatch(addComment(comment))
    }
  }
}

// 上面两个都会添加到这个容器组件的props

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)