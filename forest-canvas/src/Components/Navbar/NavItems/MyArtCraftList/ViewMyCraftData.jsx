import { FaRegStar } from "react-icons/fa";

const ViewMyCraftData = ({myCD}) => {
    const {itemName,subcategoryName,shortDescription,price,processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= myCD
    return (
        <div className="border p-4 rounded-lg shadow-md">
        {/* section1 */}
            <section>
                <div>
                    <img src={photoUrl} alt="Image"/>
                </div>
            </section>
        {/* section2 */}
            <section>
                <h1>{itemName}</h1>
                <p className="flex items-center">Rating:<FaRegStar/> {rating}</p>
                <p>Price: {price}</p>
                <p>{shortDescription}</p>
                <p>Owner: {userName}</p>
                <button>View Details</button>
                
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

export default ViewMyCraftData;