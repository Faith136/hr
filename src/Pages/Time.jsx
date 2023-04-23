import React, {useState} from 'react'
//import { FaAlgolia, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore"
import { db } from '../fire';

function Attform() {
  const [newName, setNewName] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newEmployeeid, setNewEmployeeid] = useState(0);
  const [newDate, setNewDate] = useState("");
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "attendance");

  const TimeIn = async () => {
    await addDoc(usersCollectionRef, { name: newName, timein: newTime,
      employeeid: newEmployeeid, date: newDate,
     });
    navigate("/attendance");
  };
  const TimeOut = async () => {
    await addDoc(usersCollectionRef, { name: newName, timeout: newTime,
      employeeid: newEmployeeid, date: newDate,
     });
    navigate("/attendance");
  };
  
  return (
    <div>
        <form class="w-full max-w-lg items-center">
        <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Name:
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500" id="grid-password" type="text"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
         placeholder="full names"/>
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Employeeid
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500" id="grid-password" type="text"
        onChange={(event) => {
          setNewEmployeeid(event.target.value);
        }}
         placeholder="001"/>
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Date:
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500" id="grid-password" type="Date"
        onChange={(event) => {
          setNewDate(event.target.value);
        }}
         placeholder="dd/mm/yyyy"/>
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Time:
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500" id="grid-password" type="Time"
        onChange={(event) => {
          setNewTime(event.target.value);
        }}
        
         placeholder="time"/>
      
    </div>
  </div>
  <div class="md:w-2/3 space-x-4 px-16">
      <button onClick={TimeIn} class="shadow bg-blue-700 hover:bg-blue-300 focus:shadow-outline 
      focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
       Time In</button>        
      
      <button onClick={TimeOut} class="shadow bg-red-700 hover:bg-red-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
       
        Time Out
      </button>
    </div>
</form>
    </div>
  )
}

export default Attform