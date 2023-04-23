import React from 'react'


export default function Navbar() {
  return (
    <header className = 'p-0 bg-black lg:w-auto flex justify-between items-center relative z-[100]'>
          <span>
        <img src='./1.gif'className = 'h-10 inline' alt=''/>
        <h className = "text-white text-3xl font-bold p-3 mr-8 px-20"> 
        TECHCOM
         </h>
        </span>   
          <ul className ="relative text-white font-bold sm:self-center text-3xl border-t sm:border-none space-x-7 flex ml-8 p-3">
         
        
                    
           <li className=''>
           <img src="avatar.png" 
           className="w-10 min-w-[60px] h-16min-h-[40px]
           drop-shadow-xl cursor-pointer" alt="userprofile" />
          
                    
           </li>
            </ul>
    
        </header>
  )
}
