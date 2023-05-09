// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment, onDeleteButtonClicked, onLikeButtonClicked} = props
  const {id, isLiked, name, comment, colorBack, time} = eachComment
  const onLike = () => {
    onLikeButtonClicked(id)
  }
  const onDelete = () => {
    onDeleteButtonClicked(id)
  }

  const classNameForLikedImage = isLiked ? 'active-like' : 'like'

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <>
      <li>
        <div className="comment-items-container">
          <div className="comment-item-container">
            <div className={`profile ${colorBack}`}>
              <p>{name[0]}</p>
            </div>
            <div className="profile-content">
              <div className="profile-name-time">
                <p className="name-styles">{name}</p>
                <p className="time-styles">{time}</p>
              </div>
              <div className="comment-container">
                <p className="comment-styles">{comment}</p>
              </div>
            </div>
          </div>
          <div className="like-and-delete-container">
            <button type="button" className="like-btn" onClick={onLike}>
              <div className="like-container">
                <img className="like-img" src={imageUrl} alt="like" />
                <p className={classNameForLikedImage}>Like</p>
              </div>
            </button>
            <button
              type="button"
              className="like-btn"
              onClick={onDelete}
              data-testid="delete"
            >
              <img
                className="delete-img"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
          <hr />
        </div>
      </li>
    </>
  )
}
export default CommentItem
