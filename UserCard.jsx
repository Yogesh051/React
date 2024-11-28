import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src="" />
      <p id='user-desc'>Description of Yogesh Upadhyay</p>
    </div>
  )
}

export default UserCard
