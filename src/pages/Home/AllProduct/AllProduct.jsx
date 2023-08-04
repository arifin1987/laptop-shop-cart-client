/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";


const AllProduct = (props) => {
    const { image, price, specification, model,_id } = props.product;

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
        <button className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">Add to Cart</button>
            <Link to={`/allproducts/${_id}`}> <button className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">View Details</button>  </Link>

            </div>
            
    );
};

export default AllProduct;