
import {Routes, Route } from "react-router-dom"

//Importation des pages
import Home from "../pages/Home";
import Errors from "../pages/404";
import Dashboard from "../pages/Dashboard";
import Creer from "../pages/Creer";

const index = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Creer" element={<Creer />} />
            <Route path="/*" element={<Errors />}/>
        </Routes>
    );
};
export default index;