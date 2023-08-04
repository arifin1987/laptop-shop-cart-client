import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SingleProduct from "../pages/Home/AllProduct/SingleProduct";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Carts from "../pages/Carts/Carts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          
            path:'/',
            element: <Home></Home>
          
        },
        {
          path:'/login',
          element: <Login></Login>

        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>

        },
        {
          path:'/carts',
          element: <Carts></Carts>
        },
        {
          path:'/allproducts/:id',
          element: <SingleProduct></SingleProduct>,
          loader:({params})=>fetch(`http://localhost:5000/allproducts/${params.id}`)

        }
      ]
    },
  ]);


  export default router;