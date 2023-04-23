import React from "react";


export default function Form({
    setAuthState,
    setUser
}) {
    return (
        <div className="w-full bg-emerald-500 px-96  h-[1000px]">
<div className='bg-emerald-200 px-10 py-15 space-y-16 rounded-3xl border-2'>
        <h4 className='text-5xl font semibold'>Login</h4>
        <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back please enter your details</p>
        <div className='mt-8'>
            
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your email'/>
        </div>
        <div>
            <label className='text-lg font-medium'>Password</label>
            <input
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
    <button className='active:scale -[.98] active:duration-75 py-3 rounded -xl bg-green-500
     text-white text-lg font-bold'
     >Sign in</button>
    <button>
        Sign-in with Google</button>
        </div>
        <div className="mt-8 flex justiify-center items-center">
        <p className="font-medium text-base ">Don't have an account?</p>
        <button onClick={() => setAuthState('register')}
         className="text-violet-500 text-base font-medium ml-2">Sign up</button>
        </div>
</div>
    </div></div>
    );
}