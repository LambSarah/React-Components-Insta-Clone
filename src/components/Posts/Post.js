import React from 'react'
import Comments from '../Comments/Comments'
import LikeSection from './LikeSection'
import PostHeader from './PostHeader'

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const {
    likePost,
    details: { username, thumbnailUrl, imageUrl, id, likes, comments }
  } = props

  return (
    <div className='post-border'>
      <PostHeader username={username} thumbnailUrl={thumbnailUrl} />{' '}
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={imageUrl} />
      </div>
      <LikeSection likePost={() => likePost(id)} likes={likes} />
      <Comments comments={comments} />
    </div>
  )
}

export default Post
