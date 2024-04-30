
import { useLoaderData } from "react-router-dom";

import ViewAllCraftItems from "./ViewAllCraftItems";
const AllArtcraftItems = () => {
    const myCraftData = useLoaderData()
 const handleViewDetails = (singleCraft)=>{
    console.log(singleCraft);
 }
    return (
        <>
        <div>
            <h1>total crafts data is: {myCraftData.length}</h1>
        </div>
        <div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    myCraftData.map((myCD,index)=>
                    <ViewAllCraftItems handleViewDetails={handleViewDetails} myCD ={myCD} key={index}></ViewAllCraftItems>
                    )
                }
            </div>
        </div>
        </>
    );
};

export default AllArtcraftItems;