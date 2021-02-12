import React, { useState } from 'react'

import { addPost } from './postsSlice'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

export const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const setOnTitleChange = (e) => setTitle(e.target.value)
  const setOnContentChange = (e) => setContent(e.target.value)

  const setPostStateChange = () => {
    dispatch(
      addPost({
        id: nanoid,
        title,
        content,
      })
    )
  }

  return (
    <section>
      <h2>Add a post</h2>
      <form>
        <h4>Title</h4>
        <input value={title} onChange={setOnTitleChange} />
        <h4>Content</h4>
        <input value={content} onChange={setOnContentChange} />
        <button type="button" onClick={setPostStateChange}>
          Submit
        </button>
      </form>
    </section>
  )
}
