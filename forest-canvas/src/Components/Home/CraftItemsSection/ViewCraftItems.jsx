import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const ViewCraftItems = ({craftData}) => {
    const {itemName,subcategoryName,shortDescription,price,_id, processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= craftData;
    return (
        <div className="border-2 p-2 rounded-lg">
                <section>
                    <div>
                        <img className="rounded-lg" src={photoUrl} alt="Image"/>
                    </div>
                </section>
               <section>
                <h1 className="text-2xl font-semibold mb-3 mt-3">{itemName}</h1>
                <p className="text-xs text-gray-400 mb-2">Owner: <span className="font-semibold text-purple-900">{userName}</span></p>
                <p className="mb-6">{shortDescription}</p>
               <div className="flex justify-between mb-2">
                    <p>Price: <br/> <span className="text-3xl font-bold text-red-600 font-worksans">${price}</span></p>
                    <p className="flex items-center gap-x-2">Rating:<FaRegStar/> {rating}</p>
               </div>
             <div className="text-center">
                <Link to={`/allartcraftitems/${_id}`}>
                 <button className="border-2 rounded-lg px-4 py-2 bg-green-600 font-semibold text-white">View Details</button>
                </Link>
             </div>
                
            </section>
        </div>
    );
};

export default ViewCraftItems;