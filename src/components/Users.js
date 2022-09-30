import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'
import GithubContext from '../context/github/GithubContext'
import { useContext } from 'react'
const Users = () => {
    const githubContext = useContext(GithubContext)
    const {users,loading} = githubContext
    if (loading) {
        return <Loading />
    }
    else {
        return (
            <div className='container mt-3'>
                <div className="row">
                    {users.map(user => (
                        <User user={user} key={user.id} />
                    )
                    )}
                </div>
            </div>
        )
    }


}

export default Users