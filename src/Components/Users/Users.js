import React from 'react'
import UserItem from './UserItem'
import Spinner from '../Layout/Spinner'
import PropTypes from 'prop-types'

const Users=({users,loading})=>{
if(loading){
return <Spinner />
}else{
  return(
    <div style={userStyle}>
{users.map((user)=>{
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
 Users.propType ={
   users: PropTypes.array.isRequired,
   loading : PropTypes.bool.isRequired,
 }


export default Users