import React from "react";
import Home from './pages/home/Index'
import Form from "./pages/form";
import Navbar from "./components/navbar/Index";
import { Route, Routes } from "react-router-dom";
import CharjNetwork from "./pages/charjNetwork";
import Faqs from "./pages/faqs";
import Services from "./pages/services";
import Energypedestal from "./pages/energypedestal";
import Footer from "./components/footer";
import ContactUs from "./pages/contactUs";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/charj-network" element={<CharjNetwork />} />
        <Route path="/padestal-energy" element={<Energypedestal />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
