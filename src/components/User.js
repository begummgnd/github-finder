import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const User = ({ user }) => {
    const { login, avatar_url, html_url } = user
    return (
        <div className="col-md-3 col-sm-6 col-lg-3">
            <div className='card mt-2'>
                <Card className='p-2'>
                    <Image src={avatar_url} wrapped ui={false} />
                    <Card.Content className='mt-2'>
                        <Card.Header style={{ position: "absolute", right: "100px" }} >{login}</Card.Header>
                    </Card.Content>
                    <Card.Content extra className='mt-3'  style={{marginLeft:"5rem"}}>
                        <Link to={`user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                    </Card.Content>


                </Card >
            </div>
        </div>

    )
}

export default User