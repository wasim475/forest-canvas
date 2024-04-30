import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const ViewRecentCraft = ({singleCraft}) => {
    const {itemName,subcategoryName,shortDescription,price,_id, processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= singleCraft;
    return (
        <div className="border-2 md:border-4 lg:border-8 border-black p-2 rounded-lg">
                <section>
                    <div>
                        <img className="rounded-lg" src={photoUrl} alt="Image"/>
                    </div>
                </section>
               <section className="text-center">
                <h1 className="text-2xl font-bold mb-3 mt-3 font-playfair">{itemName}</h1>
                <p className="text-xs text-red-500 mb-2">Owner: <span className="font-semibold text-purple-900">{userName}</span></p>
                <p className="mb-6">{shortDescription}</p>
               <div className="flex justify-between mb-2">
                    <p>Price: <br/> <span className="text-3xl font-bold text-red-600 font-worksans">${price}</span></p>
                    <p className="flex items-center gap-x-2">Rating:<FaRegStar/> {rating}</p>
               </div>
             <div className="text-center">
                <Link to={`/allartcraftitems/${_id}`}>
                 <button className="border-2 rounded-lg px-4 py-2 hover:border-green-600 hover:bg-white  hover:text-green-600 bg-green-600 font-semibold text-white">View Details</button>
                </Link>
             </div>
                
            </section>
        </div>
    );
};

export default ViewRecentCraft;