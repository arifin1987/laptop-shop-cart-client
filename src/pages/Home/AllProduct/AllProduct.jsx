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
        </div>
    );
};

export default AllProduct;