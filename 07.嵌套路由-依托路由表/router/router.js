import About from "../pages/About";
import Home from "../pages/Home";
import AboutC1 from "../pages/AboutC1"
import AboutC2 from "../pages/AboutC2"
import { Navigate } from "react-router-dom";

export default[
    {
        path:"/about",
        element:<About></About>,
        children:[
            {
                path:"about_1",
                element:<AboutC1/>
            },{
                path:"about_2",
                element:<AboutC2/>
            }
        ]
    },{
        path:"/home",
        element:<Home></Home>
    },{
        path:"/",
        element:<Navigate to="/about"></Navigate>
    }

]