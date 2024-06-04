import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News"
import Message from "../pages/Message"
import { Navigate } from "react-router-dom";
import Detail from "../pages/Detail";
import TableFilter from "../pages/TableFilter";

export default[
    {
        path:"/about",
        element:<About></About>,
        children:[
            {
                path:"news",
                element:<News/>,
                children:[
                    {
                        path:"detail",
                        element:<Detail/>
                    }
                ]
            },{
                path:"message",
                element:<Message/>
            }
        ]
    },{
        path:"/home",
        element:<Home></Home>
    },{
        path:"/tableFilter",
        element:<TableFilter></TableFilter>
    },{
        path:"/",
        element:<Navigate to="/about"></Navigate>
    }

]