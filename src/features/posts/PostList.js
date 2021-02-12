import React from 'react'

import { useSelector } from 'react-redux'

export const PostList = () => {
  const posts = useSelector((state) => state.posts)

  const mapPosts = posts.map((post) => (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ))

  return <section>{mapPosts}</section>
}
