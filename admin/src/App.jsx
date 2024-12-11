import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navber from './components/Navber/Navber'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom';
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List.jsx';
import Orders from './pages/Orders/Orders.jsx'
function App() {
  return (
    <div>
      <ToastContainer/>
      <Navber />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
