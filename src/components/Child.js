import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <>
                            <h1>Child Component</h1>
                            <p>Hello {user}</p>
                        </>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
