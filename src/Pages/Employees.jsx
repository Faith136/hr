import React from 'react';
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom"
import Table from './Table';

const Employees = () => {
  return (
    <div className=''>
        <h1 className='font-extrabold text-lg flex'>
      List Of Employees </h1>
          <div>
            <Link to='AddForm'>
      <button className='bg-cyan-600 text-lg px-4 font-bold rounded-md flex'>
        <AiOutlineUserAdd className='w-15 h-7' />ADD EMPLOYEE</button></Link>
    </div>
     
      <Table />
      
    </div>
  );
};

export default Employees;