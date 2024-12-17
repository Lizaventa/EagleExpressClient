import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import Main from './pages/Main/MainPage';
import Login from './pages/Login/LoginPage';
import Courier_profile from './pages/CourierProfile/CourierProfile'; 
import RegistrationPopup from './pages/Signup/Signup';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/courier_profile" element={<Courier_profile />} />
      <Route path="/signup" element={<RegistrationPopup />} />
    </Routes>
  </BrowserRouter>
);

