import React from 'react'
import Comment from './Comment'
import './Comments.css'

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const {
    comments,
    details: newCommentValue,
    updatePostComments,
    addComment
  } = props

  return (
    <div className='post-comments-wrapper'>
      <div className='post-previous-comments-wrapper'>
        {' '}
        {comments.map((commentObj, i) => {
          return <Comment key={i} details={commentObj} />
        })}{' '}
      </div>{' '}
      <div className='post-new-comment-wrapper'>
        <span className='add-comment-input'>
          <form className='comment-form'>
            <input
              id='newCommentInput'
              type='text'
              placeholder='Add comment'
              value={newCommentValue}
              onChange={updatePostComments}
              onSubmit={addComment}
            />
            <button className='add-comment-button' onSubmit={addComment}>
              Post
            </button>
          </form>
        </span>
      </div>
    </div>
  )
}

export default Comments
