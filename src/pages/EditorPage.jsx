/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import User from '../components/User'
import Editor from '../components/Editor'

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: '123', username: 'test' },
    { socketId: '23', username: 'dftes t' },
    { socketId: '3', username: 'fsdftest' },
  ])
  return (
    <div className="main-Wrapper">
      <div className="sidebar">
        <div className="sidebar-body">
          <div className="logo">
            <img src="/logo.png" className="logoImage" alt="" />
          </div>
          <div className="online">
            <h3>CONNECTED</h3>
            <img src="/online.png" alt="" />
          </div>
          <div className="users-list">
            {
              clients.map((client) => (
                <User
                  key={client.socketId}
                  username={client.username}
                />
              ))
            }
          </div>
        </div>
        <button className="btn copy">
          <img src="/copy.png" alt="" />
          <h4>ROOM ID</h4>
        </button>
        <button className="btn exit">
        <img src="/exit.png" alt="" />
          <h4>EXIT</h4>
          </button>
      </div>
      <div className="editor-Wrapper"><Editor/></div>
    </div>
  )
}

export default EditorPage