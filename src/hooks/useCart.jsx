import { useEffect, useState } from "react";


const useCart = ()=>{
    const [carts, setCart]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/carts')
        .then(res=> res.json())
        .then(data=> setCart(data))
    },[])

    return [carts];
}

export default useCart;