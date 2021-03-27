import React from 'react'
import Comment from './Comment'
import './Comments.css'

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, details: username } = props

  return (
    <div className='post-comments-wrapper'>
      {comments.map((commentObj, i) => {
        return <Comment key={i} details={commentObj}></Comment>
      })}
    </div>
  )
}

export default Comments
