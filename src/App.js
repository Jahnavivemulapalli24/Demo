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

import React, { useState } from "react";
import APIDemo from "./components/API/APIDemo";
import Header from './components/header';
import Footer from './components/footer';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import Main from './components/main';
import React from 'react';
import {connect} from 'react-redux' ;
import { IncAction } from './redux/Action';
import { DecAction } from './redux/Action';

import Sample from "./components/Sample";
import Mainpage from "./components/Mainpage";
import Demo from "./components/redux/Demo";


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
  let offer="myntra"
  return (
    <div>
      <APIDemo />
      <Header />
      <HeaderComponent />
      <HeaderComponent />
  
         <Main offer="Myntra" sale="90%"/>
        <FooterComponent offer="Flipkart" sale="60%" offer1={offer} />
       <Footer />
      <Demo />
      <Sample />
      <Mainpage />

    </div>
  );

}

export default App;