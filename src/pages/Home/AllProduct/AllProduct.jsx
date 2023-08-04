/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";


const AllProduct = ({product}) => {
    
    const { image, price, specification, model,_id } = product;

    const handleAddToCart = product =>{
        console.log(product);
        const cartItem = { menuItemId: _id,image, price, specification, model}
        console.log(cartItem);
        fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers: {
                'content-type':'applicaion/json'
            },
            body:JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Laptop added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    return (
        <div >
            <div  >
            <div className="max-w-full bg-slate-100 ">
                <img className="max-h-40" src={image} alt="" />

            </div>
            <div className="flex justify-between ">
            <h1 className="font-bold">{model}</h1>
            <p className="font-bold">{price}</p>

            </div>

            
            <p>{specification}</p>
            <StarRatings
                rating={5}
                starDimension="15px"
                starSpacing="15px"
                starRatedColor="green"
                
            />
            
            
        </div>
        <button onClick={()=> handleAddToCart(product)} className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">Add to Cart</button>
            <Link to={`/allproducts/${_id}`}> <button className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">View Details</button>  </Link>

            </div>
            
    );
};

export default AllProduct;