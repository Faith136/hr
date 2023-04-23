import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
//import Loader from "./Loader";
import { addDoc, collection } from "firebase/firestore"
import { db } from '../fire';
//import Employees from './Employees'



function AddForm() {
  const [newName, setNewName] = useState("");
  const [newContacts, setNewContacts] = useState(0);
  const [newEmployeeid, setNewEmployeeid] = useState(0);
  const [newJob, setNewJob] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const handleSubmit = async () => {
    await addDoc(usersCollectionRef, { name: newName, department: newDepartment,
      employeeid: newEmployeeid, job: newJob, date: newDate, email: newEmail,
    contacts: newContacts });
    navigate("/");
  };

 
  

  return (
    <div>
      
      <p class="text-black text-lg px-5 py-2 font-bold">New Employee Registration Form</p>
     
        <div class="w-full max-w-lg" >
             <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        name
      </label>
      <input class="appearance-none block w-full text-gray-700 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500" id="grid-password"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
        placeholder="names"/>
         </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        job
      </label>
      <input   onChange={(event) => {
          setNewJob(event.target.value);

        }}
       class="appearance-none  w-full bg-gray-200 text-gray-700 
        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500" id="grid-password"placeholder="i.e Fullstack Web Developer"/>
     
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        email
      </label>
      <input   onChange={(event) => {
          setNewEmail(event.target.value);

        }}
       class="appearance-none  w-full bg-gray-200 text-gray-700 
        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500" id="grid-password"placeholder="admin@gmail.com"/>
     
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      employeeid
      </label>
      <input   onChange={(event) => {
          setNewEmployeeid(event.target.value);
        }}
       class="appearance-none block w-full bg-gray-200 text-gray-700 border
        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
        id="grid-first-name" type="text" placeholder="001"/>
         </div>
    <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        department
      </label>
      <input   onChange={(event) => {
          setNewDepartment(event.target.value);
        }}
       class="appearance-none block w-full bg-gray-200 text-gray-700 border
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
         id="grid-first-name" type="text" placeholder="i.e Web department"/>
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        contacts
      </label>
      <input  onChange={(event) => {
          setNewContacts(event.target.value);
        }}
       class="appearance-none block w-full bg-gray-200 text-gray-700 border 
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
      for="grid-first-name" type="text" placeholder="0700000000"/>
          </div>
    <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        date
      </label>
      <input  onChange={(event) => {
          setNewDate(event.target.value);
        }}
       class="appearance-none block w-full bg-gray-200 text-gray-700 
       border rounded py-3 px-4 mb-3 leading-tight 
       focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="dd/mm/yyyy"/>
      
    </div>
  </div>
 
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Country
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Kenya</option>
          <option>Uganda</option>
          <option>Tanzania</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  
  
</div>
<button onClick={handleSubmit} className='ml-0 md:ml-10 w-full md:w-auto border-none
        outline-none bg-fuchsia-500 px-12 py-2 rounded-lg text-lg text-white 
         font-semibold'
         >SUBMIT</button>
    </div>
  )
}

export default AddForm
/*<div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border
         border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
         focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>HR and ADMIN</option>
          <option>FINANCE</option>
          <option>WEB</option>
          <option>SALES AND MARKETING</option>
          <option>TECHNICAL</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      
const validate = () =>{
  let errors = {};
  if(!name) {
    errors.name = 'Name is required';
  }
  if(!job) {
    errors.job = 'job is required';
  }
  if(!employeeid) {
    errors.employeeid = 'employeeid is required';
  }
  if(!contacts) {
    errors.contacts = 'contacts is required';
  }
  if(!department) {
    errors.department = 'department is required';
  }
  if(!date) {
    errors.date = 'date is required';
  }
  return errors;
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  let errors = validate();
  if (Object.keys(errors).length) return setErrors(errors);
    await addDoc(collection(db, "users"), {
      ...data,
      timestamp: serverTimestamp()
    });
    navigate("Table");
  }; */