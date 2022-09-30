import React from 'react'
import { useEffect } from 'react'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import { HiLocationMarker } from 'react-icons/hi'
import GithubContext from '../context/github/GithubContext'
import { Button, Icon, List } from 'semantic-ui-react'
import Repos from './Repos'
import { useContext } from 'react'
const UserDetails = () => {
  const { login } = useParams()
  const {getUser, loading, user, getUserRepos, repos } = useContext(GithubContext)
  useEffect(() => {
    getUser(login)
    getUserRepos(login)
  }, [])
  const { name, avatar_url, location, bio, blog, followers, following, public_repos } = user
  if (loading) return <Loading />
  return (
    <div className='p-5'>
      <div className="row">
        <div className="col-md-3">
          <Card className='p-2'>
            <Image src={avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta className='mt-2'>
                < HiLocationMarker style={{ color: "green" }} />
                <span>{location}</span>
              </Card.Meta>
              <Card.Description className='mt-3' >
                <strong>{bio}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon circular name='users' /> <span> Followers: {followers} | Following: {following}</span>
            </Card.Content>
            <Card.Content extra>
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='linkedin' icon='linkedin' />
            </Card.Content>
          </Card>
        </div>
        <div className="col-md-9">
          <Card className='p-2 mx-4' style={{width:"900px"}} >
            <Card.Content header='Repositories'/>
            <Card.Content>
              <List divided relaxed>
                 <Repos repos={repos}/>
                </List>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>

  )

}
export default UserDetails;