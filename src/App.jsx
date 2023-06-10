import React from "react";
import Home from './pages/home/Index'
import Form from "./pages/form";
import Navbar from "./components/navbar/Index";
import { Route, Routes } from "react-router-dom";
import CharjNetwork from "./pages/charjNetwork";

function App() {

  return (
      <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/the-charj-network" element={<CharjNetwork />} />
      </Routes>
      </>
  )
}

export default App
