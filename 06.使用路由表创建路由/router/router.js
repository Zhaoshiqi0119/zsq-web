import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";

export default[
    {
        path:"/about",
        element:<About></About>
    },{
        path:"/home",
        element:<Home></Home>
    },{
        path:"/",
        element:<Navigate to="/about"></Navigate>
    }

]