import React from 'react'
import ListItem from './ListItem'

const ListPost = () => {
    // const titles = ['JavaScript', 'React', 'React Native', 'Flutter', 'Golang', 'Java'];
    // return titles.map(item => <h1 key={item}>{item}</h1>)

    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat ",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita "
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit "
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi "
        },
    ]

    return posts.map(item => <ListItem key={item.id} post={item} />)
}

export default ListPost