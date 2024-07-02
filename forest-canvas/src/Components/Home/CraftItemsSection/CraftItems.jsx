import { useEffect, useState } from "react";
import ViewCraftItems from "./ViewCraftItems";


const CraftItems = () => {
const [craftDatas, setCraftData]= useState([])

useEffect(()=>{

    fetch("https://forest-canvas-server.vercel.app/crafts")
    .then(res=> res.json())
    .then(resData=>setCraftData(resData))
 
},[])

console.log(craftDatas);
        

    return (
        <>
            <div className="container mx-auto mt-16">
                <div className="grid grid-cols-3 gap-3">
                    {
                        craftDatas.map((craftData, index)=>(
                            <ViewCraftItems craftData={craftData} key={index}></ViewCraftItems>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CraftItems;