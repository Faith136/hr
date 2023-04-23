import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from "react-router-dom"
import { auth } from "../fire";

function Logout({
  user,
  setAuthState,
  setUser})
{
  const onSignUpHandle = () =>{
signOut(auth)
.then(() => {
  setUser=(null);
  setAuthState('login')
})
.catch((err) => console.log(err))
  }

  return (
    <div>
       <Link to="Userbox">
        <button onClick={onSignUpHandle}>Logout</button>
       </Link>
    </div>
  )
}

export default Logout;

