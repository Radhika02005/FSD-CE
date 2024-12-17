
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login.jsx"
import { useState } from 'react';

import MainLayout from "./components/MainLayout.jsx"
import Registartion from './components/Registartion.jsx';
import Dashboard from "./components/Dashboard.jsx";
import UseRef from './components/UseRef.jsx';

// function App() {

//   return (
//     //react fragmentation
//     <div className="app">
      
//       <State3/>
//       <Color/>
      
//     </div>
//   )
// }

// function App() {
//   const [store, setStore] = useState("");
//   return (

//     <div>
//       {JSON.stringify(store)}
//     <BrowserRouter>
//      <Routes>
//         <Route path="/" element={<MainLayout />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/registration" element={<Registartion regData={setStore}  />}></Route>
//      </Routes>
//     </BrowserRouter>

//     </div>
//   );
// }

function App(){
  return (
    <div>
      <UseRef/>
    </div>
  )
}

export default App