// import React from 'react';
// import Navbar from './Navbar';
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Dashboard from './Dashboard';
// import Products from './products/Products';
// import Chocolate from './products/Chocolate';
// import Icecream from './products/Icecream';
// import ChocolateDetails from './products/ChocolateDetails';
// import IcecreamDetails from './products/IcecreamDetails';
// import StudentRegistration from './products/StudentRegistration';
// import NavBar from './products/NavBar';
import React, { useState } from "react";
import APIDemo from "./components/API/APIDemo";


// const App = () => {
// return (
//   <div>
      
//       <Navbar />
//       <Routes>
//         <Route path="/"   element={<Home />} /> 
//         <Route path="/about"   element={<About />} /> 
//         <Route path="/dashboard"  element={<Dashboard />}  /> 
//         <Route path="/products"  element={<Products />} >
//         <Route path="chocolate"  element={<Chocolate />} > 
//         <Route path=":chocolateId" element={<ChocolateDetails />} />
//         </Route>
//         <Route path="icecream"  element={<Icecream />} > 
//         <Route path=":icecreamId"  element={<IcecreamDetails />} /> 
//         </Route>
        
//         </Route>
       
//         </Routes>   

        
//    <NavBar />
//    <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/studentregistration" element={<StudentRegistration />} />
//    </Routes>
// </div>
// );
// }

function App() {
  return (
    <div>
      <APIDemo />
    </div>
  );

}

export default App;