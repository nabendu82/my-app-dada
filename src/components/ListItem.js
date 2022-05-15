import React from 'react'

const ListItem = ({ post }) => {
    return (
        <>
            <h1>ID: {post.id}</h1>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </>
    )
}

export default ListItem