import React from "react";
import { Routes, Route } from "react-router-dom";
import Employees from "../Pages/Employees";
import Attendance from "../Pages/Attendance";
import Departments from "../Pages/Departments";
import Logout from "../auth/Logout";
import AddForm from "../Pages/AddForm";
import Depform from "../Pages/Depform";
import Time from "../Pages/Time";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/departments" element={<Departments />}>
         
          </Route> 
        <Route path="/logout" element={<Logout />} />
        <Route path="/addform" element={<AddForm />} />
        <Route path="/depform" element={<Depform />} />
        <Route path="/time" element={<Time />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;