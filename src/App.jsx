import React from "react";  // ✅ ADD THIS
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import DonorGO from "./Pages/DonorGO.jsx"; 
import WellNestAI from "./Pages/Wellnestai.jsx";
import ImmuneIQ from "./Pages/ImmuneIQ.jsx";
import Career from "./Pages/Career.jsx";
import Service from "./Pages/Service.jsx";
import Demo from "./Pages/Home.jsx";
import InternsAppPage from "./Pages/InternsAppPage.jsx";
import QKDPage from "./Pages/Qkd.jsx";   
import PQC from "./Pages/PQC.jsx"; 




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donorgo" element={<DonorGO />} />
      <Route path="/wellnestai" element={<WellNestAI/>} />
      <Route path="/immuneiq" element={<ImmuneIQ/>} />
      <Route path="/about" element={<About/>} />
      <Route path ="/career" element={<Career/>} />
      <Route path ="/service" element={<Service/>} />
      <Route path ="/demo" element={<Demo/>} />
      <Route path ="/internsapp" element={<InternsAppPage/>} />
      <Route path="/QKd" element={<QKDPage />} />
      <Route path="/PQC" element={<PQC />} />
    </Routes>
  );
}

export default App;
