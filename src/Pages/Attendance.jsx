import React, {useState, useEffect} from 'react'
import { collection,  getDocs, doc, deleteDoc } from "firebase/firestore"
import { db } from '../fire';
//import { useNavigate } from 'react-router-dom';
//import { FaSearchengin } from "react-icons/fa";

export default function Table() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "attendance");
  
    const Delete = async (id) => {
        const userDoc = doc(db, "attendance", id);
        await deleteDoc(userDoc);
      };
    
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);
    return (
        <>
        <div>
     <p class="font-bold text-lg">ATTENDANCE LOGS</p>
            </div>
            <div className='flex items-align space-x-2'>
              <p>Enter name:</p>
            <input type="text" placeholder='employee' className='rounded-md'/>
            <p>Date:</p>
              <input type="date" placeholder='dd/mm/yyyy' className='rounded-md'/>
              <button className='bg-green-700 rounded-md px-4 font-bold text-base'>SEARCH</button>
            </div>
        <div class="flex flex-col">

     {""}
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
     <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
       <div class="overflow-x-auto">
         <table class="min-w-full">
           <thead class="border-b">
             <tr>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Employeeid
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Name
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Date
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Time In
               </th>
               
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Time Out
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Action
               </th>
             </tr>
           </thead>
           
           <tbody>
           {users.map((user) => {
            return (
             <tr class="border-b">
               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.employeeid}</td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.name}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.date}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {user.timein}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.timeout}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 <button className='bg-green-800 text-lg font-semibold rounded-md'
                 onClick={() => {
                  Delete(user.id);
                }}>Delete</button>
               </td>
                 
             </tr>
             )})}
           </tbody>          
         </table>
       </div>
     </div>
   </div>
 </div>
        
        </>
    );
}