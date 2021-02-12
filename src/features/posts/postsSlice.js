import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Hello, this is my first Post',
  },
  {
    id: 2,
    title: 'post 2',
    content: 'Hello, this is my second post',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export default postsSlice.reducer
