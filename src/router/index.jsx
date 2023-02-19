
import {Routes, Route } from "react-router-dom"

//Importation des pages
import Home from "../pages/Home";
import Errors from "../pages/404";

const index = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/*" element={<Errors />}/>
        </Routes>
    );
};
export default index;