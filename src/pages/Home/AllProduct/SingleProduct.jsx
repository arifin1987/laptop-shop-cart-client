import { useLoaderData } from "react-router-dom";


const SingleProduct = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div >
            <div className="md:flex justify-between gap-8">
            <img src={product.image} alt="" />
            <div>
            <h1 className="font-bold">{product.model}</h1>
            <p>{product.specification}</p>
            <p className="font-bold">{product.price}</p>
            <button className="  my-4 mx-2 rounded-3xl bg-green-900 text-white px-4 py-2">Buy Now</button>
            <button className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">Add to Cart</button>

            </div>

            </div>
            
            
            
            
        </div>
    );
};

export default SingleProduct;