import React from 'react';
import { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import MainPage from '../components/MainPage';
import { auth } from '../fire';
import { onAuthStateChanged } from 'firebase/auth';

//import { async } from '@firebase/util';

export default function Userbox() {
    const [user, setUser] = useState(null);
    const [authState, setAuthState] = useState(null);

useEffect(() => {
const unSubscribeAuth = onAuthStateChanged(auth,
  async authenticatedUser => {
    if(authenticatedUser) {
      setUser(authenticatedUser.email)
      setAuthState('MainPage');
    } else {
      setUser(null);
      setAuthState('Login')
    }
  })

  return unSubscribeAuth;
}, [user])

if(authState === null) return <div className='font-bold text-center'>loading...</div>
if(authState === 'Login') return <Login setAuthState={setAuthState} setUser={setUser} />
if(authState === 'Register') return <Register setAuthState={setAuthState} setUser={setUser} />
if(user) return <MainPage setAuthState={setAuthState} setUser={setUser} />

return(


<Register />
  );
}

