import { useEffect, useState } from "react";
import ViewRecentCraft from "./ViewRecentCraft";


const MostRecent = () => {
    const [craftData, setCraftData] = useState([])
    useEffect(()=>{

            fetch("https://forest-canvas-server-3h55by99a-wasim-hossains-projects.vercel.app/crafts")
            .then(res=> res.json())
            .then(resData=>setCraftData(resData))
         
        },[])

    const lastThreeCraft = craftData.slice(-3)
    console.log(lastThreeCraft);
    
    return (
        <div className="container mx-auto mt-10 ">
            <div className="bg-gradient-to-r from-amber-200 to-yellow-400 lg:p-20 rounded-xl">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-playfair">Recently Added Crafts</h1>
                    <p></p>
                </div>
                <div className="grid lg:grid-cols-3 gap-3">
                    {
                        lastThreeCraft.map((singleCraft, index)=>(
                            <ViewRecentCraft singleCraft={singleCraft} key={index}></ViewRecentCraft>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MostRecent;