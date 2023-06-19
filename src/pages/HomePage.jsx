/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const homepage = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')

  const joinRoom = (e) => {
    if(!roomId || !username){
      toast.error('Please enter room ID and username');
      return;
    }
    if(username.length < 4){
      toast.error('Username must be atleast 4 characters long');
      return;
    }
    // redirect
    navigate(`/editor/${roomId}`,{
      state:{
        username,
      }
    });
  }
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('Room created successfully');
  };

  const handleInputEnter = (e) => {
    if(e.code === 'Enter'){
      joinRoom();
    }
  }

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
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputbox"
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className="btn joinbtn">JOIN</button>
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