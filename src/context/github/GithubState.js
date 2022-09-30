import React, { useReducer } from "react"
import GithubContext from "./GithubContext"
import GithubReducer from './GithubReducer'
import axios from "axios"
const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = (keyword) => {
        setLoading()
        setTimeout(() => {
            //api : https://api.github.com/search/users?q=begumm 
            axios.get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => {
                    dispatch({
                        type: 'SEARCH_USERS',
                        payload: res.data.items
                    })
                })

        }, 1000)
    }
   
    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }


    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }
    const getUser = (username) => {
        setLoading()
        setTimeout(() => {
            //api:  https://api.github.com/users/{username}
            axios.get(`https://api.github.com/users/${username}`)
                .then(res => {
                    dispatch({
                        type: 'GET_USER',
                        payload: res.data
                    })
                })
        }, 1000)
    }

    const getUsers = () => {
        setLoading()
        setTimeout(() => {
            axios.get(`https://api.github.com/users`)
                .then(res => {
                    dispatch({
                        type: 'GET_USERS',
                        payload: res.data
                    })
                })
        }, 1000)
    }

   
    const getUserRepos = (username) => {
        setLoading()
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}/repos`)
                .then(res => {
                   dispatch({
                    type:'GET_REPOS',
                    payload: res.data
                   })
                })
        }, 1000)
    }
    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos,
                getUsers
            }}>

            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState