import React from 'react'

const User = ({user}) => {

  return (
    <>
    <hr/>
     <h1>Name: {user.name}</h1>
     <h1>Age: {user.age}</h1>
     <h1>Email: {user.email}</h1>

    </>
  )
}

export default User