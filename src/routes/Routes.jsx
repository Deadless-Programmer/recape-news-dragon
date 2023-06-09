import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Category/Categories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
        {
            path:'/',
            element: <LoginLayout></LoginLayout>,
            children:[
                {
                    path :'/',
                    element:<Navigate to="/catagory/0"></Navigate>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'register',
                    element:<Register></Register>
                },
                {
                    path:'/terms',
                    element:<Terms></Terms>
                }
            ]
        },

    {
        path :'catagory',
        element:<Main></Main>,
        children:[
            // {
            //     path :'/',
            //     element :<Categories></Categories>,
            //     loader :()=> fetch('http://localhost:5000/news/')
            // },

            {
                path :':id',
                element:<Categories></Categories>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]

        
    },

    {
        path :'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path :':id',
                element: <PrivetRoute><News></News></PrivetRoute> ,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;