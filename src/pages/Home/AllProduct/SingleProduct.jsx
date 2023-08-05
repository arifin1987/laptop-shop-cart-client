import { useContext, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";


const SingleProduct = () => {
    const [cartItems, setCartItems] = useState(0);
    const product = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const { image, price, specification, model,_id } = product;
    const handleAddItemToCart = () => {
        setCartItems((prevItems) => prevItems + 1);
      };
    
      const handleRemoveItemFromCart = () => {
        if (cartItems > 0) {
          setCartItems((prevItems) => prevItems - 1);
        }
      };
    
    
    
    const handleAddToCart = product =>{
        console.log(product);
        if(user && user.email){
        const cartItem = { menuItemId: _id,image, price, specification, model,email: user.email}
        console.log(cartItem);
        fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
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
    else{
        Swal.fire({
            title: 'Please login to order the Laptop',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
}
    return (
        <div >
            <div className="md:flex justify-between gap-8">
            <img src={product.image} alt="" />
            <div>
            <h1 className="font-bold">{product.model}</h1>
            <p>{product.specification}</p>
            <StarRatings
                rating={5}
                starDimension="15px"
                starSpacing="15px"
                starRatedColor="green"
                
            />
            <p className="font-bold">${product.price}</p>
            <button onClick={handleRemoveItemFromCart}>-</button>
            <span>{cartItems}</span>
            <button onClick={handleAddItemToCart}>+</button>
            <button className="  my-4 mx-2 rounded-3xl bg-green-900 text-white px-4 py-2">Buy Now</button>
            <button onClick={()=> handleAddToCart(product)} className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">Add to Cart</button>

            </div>

            </div>
            
            
            
            
        </div>
    );
};

export default SingleProduct;