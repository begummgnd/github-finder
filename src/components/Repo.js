import React from 'react'
import { List} from 'semantic-ui-react'
const Repo = ({ repo }) => {

  return (
    <List.Item size='large'>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'><a href={repo.html_url}>{repo.name}</a></List.Header>
        <List.Description as='a'>Updated at  {repo.updated_at.slice(0, 10)}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default Repo