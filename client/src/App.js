import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Errorpage from "./components/Errorpage";
import Addplace from "./components/Addplace";
import Addactivity from "./components/Addactivity";
import Maketrip from "./components/Maketrip";
import Dump from "./components/Dump";
import Advertisement from "./components/Advertisement";
import Addadvertisement from "./components/AddAdvertisement";
import Bookedtrip from "./components/Bookedtrip";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Updateplace from "./components/Updateplace";
import DeletePlace from "./components/DeletePlace";
import UpdateActivity from "./components/UpdateActivity";
import EditActivity from "./components/EditActivity";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/addtouristplace" element={<Addplace />}></Route>
        <Route path="/addactivity" element={<Addactivity />}></Route>
        <Route path="/maketrip" element={<Maketrip />}></Route>
        <Route path="/dump" element={<Dump />}></Route>
        <Route path="/adv" element={<Advertisement />}></Route>
        <Route path="/addadv" element={<Addadvertisement />}></Route>
        <Route path="/bookedtrip" element={<Bookedtrip />}></Route>
        <Route path="/delete" element={<Delete />}></Route>
        <Route path="/update" element={<Update />}></Route>
        <Route path="/updateplace" element={<Updateplace />}></Route>
        <Route path="/deleteplace" element={<DeletePlace />}></Route>
        <Route path="/editactivity" element={<EditActivity />}></Route>
        <Route path="/updateactivity" element={<UpdateActivity />}></Route>

        {/* <Route element={<Errorpage />}></Route> */}
      </Routes>
    </>
  );
};

export default App;
