import React from 'react'
import PropsTypes from 'prop-types'
import UserItem from './UserItem'

class User extends React.Component{
state ={
  users:[
       {
     "id": 1,
    "login": "mojombo",
    "html_url": "https://github.com/mojombo",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
       },
       {
     "id": 2,
     "login": "defunkt",
     "html_url": "https://github.com/defunkt",
     "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",

       },
       {
     "id": 3,
     "login": "pjhyett",
     "html_url": "https://github.com/pjhyett",
     "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",

    
       },
  ]
}

  render(){
    return(
      <div style={userStyle}>
{this.props.users.map((user)=>{
 return <UserItem key={user.id} users={user} />
})}
      </div>
    )
  }
}

const userStyle = {

  display : "grid",
  gridTemplateColumns : "repeat(auto-fit, minmax(300px,1fr))",
  gridGap:"1rem",
}

export default User