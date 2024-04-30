import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { IoMdWarning } from "react-icons/io";
import Swal from "sweetalert2";


const ViewCraftDetails = () => {
    const craftDetailData = useLoaderData()
    let {id}= useParams()
    let craftData = craftDetailData.find((cData)=>cData._id === id)
    const {itemName,subcategoryName,shortDescription,price,_id, processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= craftData;

    const handleAddToCart = ()=>{
        if(stockStatus=== 'In Stock'){
            Swal.fire({
                title: 'Success!',
                text: 'Item Added to cart',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        }else{
            Swal.fire({
                text: 'Item out of Stock',
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }
    }
    const handleWishList = ()=>{
        
            Swal.fire({
                title: 'Success!',
                text: 'Item Added to WishList',
                icon: 'success',
                confirmButtonText: 'Close'
            })
              
             
    }

    return (
     <>
        <div className="container mx-auto">
            <div className="flex gap-x-4 p-4">
                <section className="w-1/2 border-2 flex justify-center p-2 rounded-xl">
                    <img className="h-[80vh] rounded-lg w-full" src={photoUrl}/>
                </section>
                <section>
                    <h1 className="text-3xl font-playfair font-bold mb-2">{itemName}</h1>
                    <p className="text-xs text-gray-400 mb-2">Owner: <span className="font-semibold text-purple-500">{userName}</span></p>
                    <p className="mb-3">Price: <span className="text-3xl font-bold text-red-600 font-worksans"><br/>${price}</span></p>
                    <p className="flex items-center gap-x-2 mb-2">Rating:<FaRegStar/> {rating}</p>
                     <p className="mb-2">processingTime: {processingTime}</p>
                     <p className="mb-2">Customization: {customization}</p>
                   
                        <p className="mb-3 text-gray-400 font-semibold">{shortDescription}</p>

                        <p className="flex items-center mb-2">stockStatus: <span className="text-lg font-medium flex items-center">{stockStatus}{stockStatus==='In Stock'?< IoCloudDoneSharp className="text-green-500"/>: <IoMdWarning className="text-red-500"/>}</span></p>
                        <p className="">Contact with owner: <span className="font-medium">{userEmail}</span></p>

                       <div className="mt-10 flex gap-x-3">
                            <button onClick={handleAddToCart} className="border-2 rounded-lg px-4 py-2 bg-yellow-600 font-semibold text-white">Add to Cart</button>
                            <button onClick={handleWishList} className="border-2 rounded-lg px-4 py-2 bg-green-600 font-semibold text-white">WishList</button>
                       </div>

                </section>
            </div>
        </div>
     </>
    );
};

export default ViewCraftDetails;