import { useState, useEffect } from "react";
import { db } from "../fire";
import { FaSearchengin } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newHead, setNewHead] = useState("");
  const [newDepartmentid, setNewDepartmentid] = useState(0);
  const [newDepartment, setNewDepartment] = useState("");


  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "departments");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { head: newHead, department: newDepartment,
    departmentid: newDepartmentid });
  };

  const Update = async (id, department) => {
    const userDoc = doc(db, "departments", id);
        await updateDoc(userDoc);
  };

  const Delete = async (id) => {
    const userDoc = doc(db, "departments", id);
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
    <div className="App space-x-4 flex">
     
      <input
        
        placeholder="Department..."
        onChange={(event) => {
          setNewDepartment(event.target.value);
        }}
      />
       <input
        placeholder="Head..."
        onChange={(event) => {
          setNewHead(event.target.value);
        }}
      />
<input
        placeholder="Departmentid..."
        onChange={(event) => {
          setNewDepartmentid(event.target.value);
        }}
      />
      <button className="bg-cyan-600 rounded-md px-3 text-lg font-bold"
       onClick={createUser}>ADD DEPARTMENT</button>
      <div className="w-1/4 flex justify-end ">
        <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 fill-slate-300 w-1/4"  viewBox="0 0 20 20">!-- ... --</svg>
    <FaSearchengin />
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>

</label>

</div>
    </div>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
     <div class="py-2 inline-block min-w-1/2 sm:px-6 lg:px-8">
       <div class="overflow-x-auto">
         <table class="min-w-1/2">
           <thead class="border-b">
             <tr>
               <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                 Department
               </th>
               <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                 Head of department
               </th>
              
               <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                 Number of departments
               </th>
              
               <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                 Action
               </th>
             </tr>
           </thead>
           
           <tbody>
           {users.map((user) => {
            return (
             <tr class="border-b">
               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.department}</td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.head}
               </td>
              
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {user.departmentid}
               </td>
                             
                  <td class="text-sm text-gray-900 font-light px-6 space-x-3 py-4 whitespace-nowrap">
                <button className='bg-green-500 rounded-md'
                onClick={() => {
                  Update(user.id, user.name);
                }}
                >Update</button>
                <button className='bg-red-500 rounded-md'
                onClick={() => {
                  Delete(user.id);
                }}
              >Delete</button>
                  </td>
             </tr>
             )})}
           </tbody>          
         </table>
       </div>
     </div>
   </div>
 
</>
  );
}

export default App;
/*  {users.map((user) => {
        return (
          <div>
            {" "}
           
          </div>
        );
      })}
      <table class="min-w-full">
                         
               <tbody>
             <tr class="border-b">
               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.department}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.email}
               </td>
               </tr>
               </tbody>
            </table>

            <div className="space-x-5">
            <button className="bg-fuchsia-500 px-4 text-base"
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button className="bg-fuchsia-500 px-4 text-base"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
            </div>*/