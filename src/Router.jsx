import {createBrowserRouter}from "react-router";
import Layout from "./layout";
import HomePage from "./page/Home";
import CheckoutPage from "./page/CheckoutPage";

export const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            id: "home",
            path:"/",
            index:true,
            element:<HomePage/>
        },
       {
        id: "checkout",
        path:"/checkout",
        element:<CheckoutPage/>
       }


    ]
    
}])