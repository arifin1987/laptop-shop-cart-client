/* eslint-disable react/prop-types */


const AllProduct = (props) => {
    const {image, price,specification,model} = props.product;

    return ( 
        <div >
            <div className="max-w-full bg-slate-100">
            <img  src={image} alt="" />

            </div>
            
            <h1>{model}</h1>
            <p>{price}</p>
            <p>{specification}</p>
            <button className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2">Add to Cart</button>
        </div>
    );
};

export default AllProduct;