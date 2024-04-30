import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewMyCraftData = ({myCD,myCraftDatas,setMyCraftDatas}) => {
    const {itemName,subcategoryName, _id, shortDescription,price,processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}= myCD


    const handleDelete =(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
         
            fetch(`http://localhost:3000/crafts/${_id}`,{
                method: 'delete'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
              });
            }
            const remaining = myCraftDatas.filter((myCdata)=>myCdata._id !==_id)
            setMyCraftDatas(remaining)
            })
            }
          });
    }
    return (
        <div className="border-2  p-2 rounded-lg">
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
                 <button className="border-2 rounded-lg px-2 py-1 hover:border-green-600 hover:bg-white  hover:text-green-600 bg-green-600 font-semibold text-white">View</button>
                </Link>

                
                 <button onClick={()=>handleDelete(_id)} className="border-2 rounded-lg px-2 py-1 hover:border-red-500 hover:bg-white  hover:text-red-500 bg-red-500 font-semibold text-white">Delete</button>
                

                <Link to={`/updatecraft/${_id}`}>
                 <button className="border-2 rounded-lg px-2 py-1 hover:border-red-500 hover:bg-white  hover:text-red-500 bg-red-500 font-semibold text-white">Update</button>
                </Link>
             </div>
                
            </section>
        </div>
    );
};

export default ViewMyCraftData;