import { useContext } from "react";
import { AuthContex } from "../../../../Auth provider/AuthProvider";
import Swal from "sweetalert2";

const AddCraftItem = () => {
    let {user} = useContext(AuthContex)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const processingTime = form.processingTime.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const photoUrl = form.photoUrl.value;

        const formData ={itemName,subcategoryName,shortDescription,price,processingTime,rating,customization, stockStatus,userEmail,userName,photoUrl}

        console.log(formData);

        fetch('http://localhost:3000/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <>
        <div className="container mx-auto">
        <div className="text-center">
        <h1 className="text-3xl font-worksans mb-6">Craft Item Submission Form</h1>
            <p className="text-gray-500">
                This is your opportunity to contribute your own unique creations to our forest-inspired gallery. Simply fill out the form below to share your artwork with our community.
            </p>
        </div>
            <form onSubmit={handleSubmit}>
                <div className="p-10">
                {/* 1st row */}
                    <div className="flex gap-x-4 mb-4">
                        {/* item name */}
                        <div className="w-1/2 ml-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Item Name</span>
                                </div>
                                <input type="text" name="itemName" placeholder="item name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* subcategory_Name */}
                        <div className="w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Subcategory_Name</span>
                                </div>
                                <input type="text" name="subcategoryName" placeholder="Subcategory Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                {/* 2nd row */}
                    <div className="flex gap-x-4 mb-4">
                        {/* Short description */}
                        <div className="w-1/2 ml-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Short Description</span>
                                </div>
                                <textarea className="textarea textarea-bordered" name="shortDescription" placeholder="Short Description"></textarea>
                            </label>
                        </div>
                        {/* Price */}
                        <div className="w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price</span>
                                </div>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                {/* 3rd row */}
                    <div className="flex gap-x-4 mb-4">
                        {/* Short description */}
                        <div className="w-1/2 ml-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">processing time</span>
                                </div>
                                <input type="number" name="processingTime" placeholder="processing time" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Price */}
                        <div className="w-1/2">
                            <label className="form-control w-3/4">
                                <div className="label">
                                    <span className="label-text">Rating</span>
                                </div>
                                <select className="select select-accent w-full max-w-xs" name="rating">
                                    <option disabled selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </label>
                        </div>
                    </div>
                {/* 4th row */}
                    <div className="flex gap-x-4 mb-4">
                        {/* customization-*/}
                        <div className="w-1/2 ml-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">customization</span>
                                </div>
                                <select className="select select-accent w-full max-w-xs" name="customization">
                                    
                                    <option>Yes</option>
                                    <option>No</option>
                                   
                                </select>
                            </label>
                        </div>
                        {/* Price */}
                        <div className="w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">stockStatus</span>
                                </div>
                                <select className="select select-accent w-full max-w-xs"  name="stockStatus">
                                    
                                    <option>In Stock</option>
                                    <option>Out of stock</option>
                                   
                                </select>
                            </label>
                        </div>
                    </div>
                     {/* 5th row */}
                     <div className="flex gap-x-4 mb-4">
                        {/* item name */}
                        <div className="w-1/2 ml-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">User Email</span>
                                </div>
                                <input type="text" placeholder="User Email" name="userEmail" value={user.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* subcategory_Name */}
                        <div className="w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">User Name</span>
                                </div>
                                <input type="text" value={user.displayName} name="userName" placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                     {/* 6th row */}
                     <div className="flex gap-x-4 mb-4">
                        {/* item name */}
                        <div className="w-full ml-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">photoUrl</span>
                                </div>
                                <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" className="btn btn-block" value="Add"/>
                </div>
            </form>
        </div>
        </>
    );
};

export default AddCraftItem;