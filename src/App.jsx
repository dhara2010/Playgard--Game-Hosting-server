import React from "react";
import './App.css'
import {  BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Pages/Support/Support";
import Location from "./Components/Pages/Location/Location";
import DadicatedServer from "./Components/Pages/DadicatedServer/DadicatedServer";
import GameDetails2 from "./Components/Pages/GameDetails-2/GameDetails2";
import GameDetails from "./Components/Pages/GameDetails/GameDetails";
import GameHosting from "./Components/Pages/GameHosting/GameHosting";
import Blogs from "./Components/Blogs/Blogs";
import BlogList from "./Components/Blogs/BlogList";
import BlogDetails from "./Components/Blogs/BlogDetails/BlogDetails";
import Header from "./Components/Home/Header";
import MinecratServer from "./Components/Pages/MinecraftServer/MinecratServer";
import About from "./Components/Pages/About/About";
import GameServerHQ from "./Components/Home/GameServerHQ/GameServerHQ";
import ScrollToTop from "./Scrolltotop";

function App() {
  return (
    <>
     <ScrollToTop />
    <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/DadicatedServer" element={<DadicatedServer />} />
        <Route path="/MinecraftServer" element={<MinecratServer />} />
        <Route path="/GameDetails2" element={<GameDetails2 />} />
        <Route path="/GameDetails" element={<GameDetails />} />
        <Route path="/GameHosting" element={<GameHosting />} />
        <Route path="/GameServerHQ" element={<GameServerHQ />} />
        <Route path="/About" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/bloglist" element={<BlogList/>}/>
        <Route path="/blogdetails" element={<BlogDetails/>}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
