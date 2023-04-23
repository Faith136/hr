import React from 'react'
import Sidebar from './Sidebar'
import NavPage from "./NavPage";
import Navbar from './Navbar';


function MainPage() {
  return (
    <React.Fragment>
    {/* heading section */}
    <section>
      <div>
        <Navbar/>
      </div>
    </section>

    {/* sidebar section */}
    <section>
      
      <div className='grid grid-cols-12 '>
       
        <div className='col-span-3 bg-black pl-2 sm: text-sm md:col-span-2 h-[1500px]'>
            <Sidebar />
        </div>
      

        <div className='col-span-9 h-[1500px] pl-2 md:col-span-10 bg-cyan-400'>
            <NavPage/>
        </div>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage