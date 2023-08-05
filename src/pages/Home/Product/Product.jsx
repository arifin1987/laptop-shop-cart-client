import { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(' https://laptop-shop-cart-server.vercel.app/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="md:flex justify-between m-4">

                <button className="bg-slate-300 rounded-2xl px-4 ">Laptop Type   </button>
                <button className="bg-slate-300 rounded-2xl px-4 ">Price </button>
                <button className="bg-slate-300 rounded-2xl px-4 ">Review </button>
                <button className="bg-slate-300 rounded-2xl px-4 ">Color </button>
                <button className="bg-slate-300 rounded-2xl px-4 ">Material </button>
                <button className="bg-slate-300 rounded-2xl px-4 ">Offer </button>
                <button className="bg-slate-300 rounded-2xl px-4 ">All Filters </button>


                <button className="border-2 rounded-2xl px-4 py-2">Sort by <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> </button>



            </div>
            <h1 className="text-2xl font-bold my-6">Laptops For You!</h1>
            <div className="md:grid grid-cols-4 gap-8 my-4 ">
                {
                    products.map(product => <AllProduct
                        key={product.id}
                        product={product}
                    ></AllProduct>)
                }

            </div>

        </div>

    );
};

export default Product;