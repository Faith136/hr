import * as React from "react";
import { auth } from "../fire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function Register({
    setAuthState,
    setUser
}) {
    const [email, setEmail] = useState('');
    const [password, setpassword] =useState('');

const onSignUpHandle = () => {
    if(email !== null && password !== null){
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) =>{
            setUser(user.user.email);
            setAuthState('MainPage')
        })
        .catch((err) => {
            alert(err)
        })
    }
}

    return (
        <div className=" w-full px-96 bg-emerald-500 h-[1000px]">
<div className='bg-emerald-200 px-10 py-13 rounded-3xl  border-2'>
        <h4 className='text-5xl font semibold'>Create account</h4>
        <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back please enter your detais</p>
        <div className='mt-8'>
            <div>
            <label className='text-lg font-medium'>Username</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your username'/>
        </div>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your email'/>
        </div>
        <div>
            <label className='text-lg font-medium'>Password</label>
            <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your password'/>
        </div>
<div className='mt-8 flex justify-between item-center'>
    <div>
        <input type="checkbox" />
        <label className='ml-2 font-medium text-base'>Remember for 30 days</label>
    </div>
    <button className='font-medium text-base text-violet'>Forgot password?</button>
</div>
<div className='mt-8 flex flex-col gap-y-4'>
    <button onClick={onSignUpHandle}
     className='active:scale -[.98] active:duration-75 py-3 
     rounded -xl bg-green-500 text-white text-lg font-bold'>
        Register</button>
    <button>
        Sign-in with Google</button>
</div>
</div>
    </div></div>
    );
}