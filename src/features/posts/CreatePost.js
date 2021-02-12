import React, { useState } from 'react'

import { addPost } from './postsSlice'

import { useDispatch } from 'react-redux'

export const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const setOnTitleChange = (e) => setTitle(e.target.value)
  const setOnContentChange = (e) => setContent(e.target.value)

  return (
    <form>
      <h2>Add a post</h2>
      <h4>Title</h4>
      <input value={title} onChange={setOnTitleChange} />
      <h4>Content</h4>
      <input value={content} onChange={setOnContentChange} />
      <button>Submit</button>
    </form>
  )
}
