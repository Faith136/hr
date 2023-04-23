import React from 'react';
//import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
//import MainPage from './components/MainPage';
import Userbox from './auth/Userbox'

const App = () => (
  <BrowserRouter>
  
    <Userbox />
    

  </BrowserRouter>
);

export default App;

