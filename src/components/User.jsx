import React from 'react'
import Avatar from 'react-avatar'

const User = ({ username, socketId }) => {
    return (
        <div className="user" key={socketId}>
            <Avatar name={username} size={50} round="14px" />
            <span className="userName">{username}</span>
        </div>
    )
}

export default User