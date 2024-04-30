import { useLoaderData } from "react-router-dom";
import ViewMyCraftData from "./ViewMyCraftData";
import { useContext, useState } from "react";
import { AuthContex } from "../../../../Auth provider/AuthProvider";


const MyArtCraftList = () => {
    const loadedMyCraftDatas = useLoaderData()
    const [myCraftDatas, setMyCraftDatas]= useState(loadedMyCraftDatas)
    let {user} = useContext(AuthContex)
    // let myCraftData = myCraftDatas.find((myCData)=>myCData.userEmail === user.email)
    // console.log(myCraftData);
    // const {itemName,subcategoryName,shortDescription,price,_id, processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= myCraftData;
    return (
        <>
        <div>
            <div className="grid grid-cols-3 gap-3">
                {
                    myCraftDatas.map((myCD,index)=>
                    myCD.userEmail===user.email
                    ?
                    <ViewMyCraftData myCD ={myCD} myCraftDatas={myCraftDatas} setMyCraftDatas={setMyCraftDatas} key={index}></ViewMyCraftData>
                    :
                    ""
                    
                    )
                }
            </div>
        </div>
        </>
    );
};

export default MyArtCraftList;