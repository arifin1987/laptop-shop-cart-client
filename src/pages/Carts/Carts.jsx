import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";


const Carts = () => {
    const[carts] = useCart();
    
    
    const total= carts.reduce((sum,item)=>item.price +sum,0);
    
    return (
        <div>
            <h1 className="text-2xl font-bold">Total Items:{carts.length}</h1>
            <h1 className="text-2xl font-bold">Total Price:${total}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Laptop</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.model}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Carts;