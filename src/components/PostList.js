import React, { Component } from 'react'
import ListItem from './ListItem'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    // async componentDidMount() {
    //     const url = 'https://jsonplaceholder.typicode.com/posts';
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     this.setState({ posts: data })
    // }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(err => console.log(err))
    }

    render() {
        const { posts } = this.state;
        return posts.map(item => <ListItem key={item.id} post={item} />)
    }
}

export default PostList
