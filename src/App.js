/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState, useEffect } from 'react'
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import './App.css'
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
// Import the dummyData
import dummyData from './dummy-data.js'

//renaming dummtyData
const postsData = dummyData
console.log(postsData)

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [posts, setPosts] = useState(postsData)

  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // State for adding comment to post
  const [comments, setComments] = useState('commentsData')

  const likePost = postId => {
    /*
                  This function serves the purpose of increasing the number of likes by one, of the post with a given id.

                  The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
                  This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

                  Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
                  The callback passed into `map` performs the following logic:
                    - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
                    - otherwise just return the post object unchanged.
                   */

    //for each post
    const findPostAndAddLike = posts.map(post => {
      //if the post id matches postId
      if (post.id === postId) {
        // return a new post obj with likes increased by one
        return { ...post, likes: post.likes++ }
      } else {
        //otherwise return post unchanged
        return post
      }
    })
    //updating state with after likes
    setPosts(findPostAndAddLike)
  }

  // event handler fpr typing in the search box
  const handleSearchTextInput = event => {
    setSearchValue(event.target.value)
    setPosts(searchResults)
  }

  // when searchValue is changed, executes this function to update search Results
  useEffect(() => {
    const filteredPosts = posts.filter(post =>
      post.username.toLowerCase().includes(searchValue)
    )
    setSearchResults(filteredPosts)
  }, [searchValue, posts])

  //counter for assigning new comment IDs
  let newCommentId = 40

  // adds new comment when user clicks "Post" button on comment input
  const updatePostComments = postId => {
    const addComment = event => {
      let newComment = {
        id: newCommentId,
        text: event.target.value,
        user: 'boredEyeball'
      }
      let updatedComments = posts.map(post => {
        if (postId === post.id) {
          return {
            post: {
              ...post,
              comments: { ...comments, newComment }
            }
          }
        } else {
          return post
        }
      })
      setComments(updatedComments)
    }

    setPosts(updatePostComments)
  }
  return (
    <div className='App'>
      {' '}
      {
        //pass props to Posts}
        <div>
          <SearchBar handleSearchTextInput={handleSearchTextInput} />
          <Posts
            posts={posts}
            likePost={likePost}
            addComment={updatePostComments}
          />
        </div>
      }
    </div>
  )
}
export default App
