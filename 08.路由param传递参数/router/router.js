import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News"
import Message from "../pages/Message"
import { Navigate } from "react-router-dom";
import Detail from "../pages/Detail";

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
                        path:"detail/:id/:title/:content",
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
        path:"/",
        element:<Navigate to="/about"></Navigate>
    }

]