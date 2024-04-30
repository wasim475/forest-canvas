
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ViewAllCraftItems = ({myCD, handleViewDetails}) => {
    const {itemName,subcategoryName,shortDescription,price,_id, processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= myCD
    return (
        <div className="border p-4 rounded-lg shadow-md">
        {/* section1 */}
            <section>
                <div>
                    <img className="rounded-lg" src={photoUrl} alt="Image"/>
                </div>
            </section>
        {/* section2 */}
        {/* <hr className="text-red-600 font-bold"/> */}
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
                 <button onClick={()=>handleViewDetails(myCD)} className="border-2 rounded-lg px-4 py-2 bg-green-600 font-semibold text-white">View Details</button>
                </Link>
             </div>
                
            </section>
        {/* section3 */}
            <section></section>
        {/* section4 */}
            <section></section>
        {/* section5 */}
            <section></section>
        </div>
    );
};

export default ViewAllCraftItems;