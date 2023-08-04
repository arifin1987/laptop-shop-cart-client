import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SingleProduct from "../pages/Home/AllProduct/SingleProduct";

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
          path:'/allproducts/:id',
          element: <SingleProduct></SingleProduct>,
          loader:({params})=>fetch(`http://localhost:5000/allproducts/${params.id}`)

        }
      ]
    },
  ]);


  export default router;