import { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";


const Product = () => {
    const[products, setProducts]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allproducts')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h1>Laptops For You!</h1>
            <div className="md:grid grid-cols-4 gap-4 my-4">
            {
                products.map(product=><AllProduct
                key={product.id}
                product={product}
                ></AllProduct> )
            }
            
        </div>

        </div>
        
    );
};

export default Product;