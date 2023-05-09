import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        colorBack:
          initialContainerBackgroundClassNames[
            Math.floor(
              Math.random() * initialContainerBackgroundClassNames.length,
            )
          ],
        time: formatDistanceToNow(new Date()),
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onLikeButtonClicked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteButtonClicked = id => {
    const {commentsList} = this.state
    const updatedComments = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: updatedComments})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentCount = commentsList.length
    return (
      <div className="bg-container">
        <div className="data-img-container">
          <div className="data-container">
            <h1 className="heading">Comments</h1>
            <p className="data-para">Say something about 4.0 Technologies</p>
            <form className="form-styles" onSubmit={this.onAddComment}>
              <input
                value={name}
                className="input-name"
                name="Your Name"
                placeholder="Your Name"
                type="text"
                onChange={this.onNameChange}
              />
              <br />
              <textarea
                value={comment}
                className="input-description"
                placeholder="Your Comment"
                type="textarea"
                name="Your Comment"
                onChange={this.onCommentChange}
              />
              <br />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
          </div>
        </div>
        <hr className="horizontal-rule" />
        <p className="number-of-comments">
          <span className="number">{commentCount}</span> Comments
        </p>
        <div className="comments-container">
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                onLikeButtonClicked={this.onLikeButtonClicked}
                onDeleteButtonClicked={this.onDeleteButtonClicked}
                eachComment={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
