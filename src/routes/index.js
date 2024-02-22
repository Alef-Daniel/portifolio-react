import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


export default function  RoutesApp(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/*<Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>*/}
            </Routes>
        </div>
    )
}