/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const homepage = () => {
  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
  };

  return (
    <div className="homePage-Wrapper">
     <div className="form-Wrapper">
         <img src="/logo.png" alt="logo" />
      <h4 className="main-label">Collaborate Code in Real-Time with Ease.</h4>
      <div className="input-group">
          <input
            type="text"
            className="inputbox"
            placeholder="room ID"
            onChange={(e)=>setRoomId(e.target.value)}
            value={roomId}
          />
          <input
            type="text"
            className="inputbox"
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
          />
          <button className="btn joinbtn">JOIN</button>
          <span className="create-info ">
            <a onClick={createNewRoom} href="/" className="create-new">Create new room</a></span>
        </div>
      </div>
      <footer>
        <h4>Built with 💙 by &nbsp;</h4>
        <a target='_blank' rel="noreferrer" href="https://github.com/yuvrxj-afk" >
          <img src="/author.png" alt="author" />
        </a>
      </footer>
    </div >
  )
}

export default homepage 