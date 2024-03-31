import { Route, Routes } from "react-router-dom"
import Login from "./login"
import Home from "./Home";
import Onebox from "../Pages/onebox";
import Index from "../Pages";


const MainRoutes=()=>{

    return <>
    
    <Routes>
        
        <Route path="/email-account" element={<Home/>} />
        <Route path="/onebox" element={<Onebox/>} />
        <Route path="/logged-page" element={<Index/>} />
    </Routes>
    
    </>
};

export default MainRoutes;