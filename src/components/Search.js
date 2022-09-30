import React, {useState} from 'react'
import { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'
const Search = () => {
    const {searchUsers,clearUsers,users} = useContext(GithubContext)
    const {setAlertMessage} = useContext(AlertContext)
    const [keyword,setKeyword] = useState('')

    const onChange = (e) => {  
        setKeyword(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault() 
        if(keyword === '') {
            setAlertMessage('Lütfen bir anahtar kelime giriniz.','danger')
        }
        else {
            searchUsers(keyword)
            setKeyword('')
        }
        
    }
        return (
            <div className='container my-3'>
                <form onSubmit={onSubmit}>
                    <div className='input-group'>
                        <input type='text' value={keyword} onChange={onChange} className='form-control' />
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-primary mx-1'>Search</button>
                        </div>
                    </div>
                </form >
                {
                users.length>0 && <button type="button" onClick={clearUsers} className='btn btn-secondary btn-sm mt-2' style={{ display: "block"}}>Clear Result</button>
                }
               
            </div>
        )
    }

export default Search