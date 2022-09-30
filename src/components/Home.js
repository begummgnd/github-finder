import React from 'react'
import { useContext, useEffect } from 'react'
import GithubContext from '../context/github/GithubContext'
import Search from './Search'
import Users from './Users'
const Home = () => {
    const {getUsers} = useContext(GithubContext)
    useEffect(() => {
        getUsers()
    },[])
    return (
        <>

            <Search />
            <Users />
        </>
    )
}

export default Home