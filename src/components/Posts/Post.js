import React from 'react'
import Comments from '../Comments/Comments'
import LikeSection from './LikeSection'
import PostHeader from './PostHeader'

const Post = props => {
  //console.log(props)
  // 🔥 Make sure the parent of Post is passing the right props!
  const {
    likePost,
    details: { username, thumbnailUrl, imageUrl, id, likes, comments }
  } = props
  console.log(props)
  return (
    <div className='post-border'>
      <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={imageUrl} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(id)} likes={likes}></LikeSection>
      {/* Comments also wants its props! */}
      <Comments comments={comments}></Comments>
    </div>
  )
}

export default Post
