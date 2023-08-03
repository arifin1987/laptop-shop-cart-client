

const Banner = () => {
    return (
        <div className="md:flex justify-between bg-red-50 p-10">
            <div>
            <h1 className="text-green-900 text-4xl font-bold">Grab Upto 50% Off On <br/> Selected Laptop</h1>
            <button className="  my-4 rounded-3xl bg-green-900 text-white px-4 py-2">Buy Now</button>

            </div>
            <div  >
                <img src="/img/business-woman-presenting-laptop_23-2147626302.avif" className="w-1/2  ml-20 rounded" />
            </div>
            
        </div>
    );
};

export default Banner;