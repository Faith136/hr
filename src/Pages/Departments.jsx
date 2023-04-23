import React from 'react';
//import { heroData } from './Ddata';
import Depform from './Depform'
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom"

const Departments = () => {
  return (
    <>
     <div class="space-y-4" className='depform'>
          <h1 className='font-extrabold text-lg'>Manage Departments</h1>
          <div>
            <Link to='Depform'>
      <button className='bg-emerald-600 text-lg px-4 font-bold rounded-md flex'>
        <AiOutlineUserAdd className='w-15 h-7' />ADD Department</button></Link>
    </div>
    <p className='py-3'>Enter Department details:</p>
          <Depform />
        </div>
    </>
  );
};

export default Departments;

/*{heroData && heroData.map(n => (
      <div key={n.id} class="max-w-md mx-auto flex margin-top: 0.375rem bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img src={n.imageSrc} class="h-48 w-full object-cover md:h-full md:w-48" alt="kwb"/>
    </div>
    
    <div  class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{n.name}</div>
      <h class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        {n.desc}</h>
      <p class="mt-2 text-slate-500">{n.about}</p>
      <button 
      className='px-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'>
        VIEW</button>
    </div>
  </div>  
</div>
))}<div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">The Adminstration</div>
      <h class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        The Chief Executive Officer and Human Resorce Manager</h>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      <button 
      className='px-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'>
        VIEW</button>
    </div>
  </div> 
  */