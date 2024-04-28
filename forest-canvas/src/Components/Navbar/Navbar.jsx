import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { LuTrees } from "react-icons/lu";

import { useContext } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContex } from "../../Auth provider/AuthProvider";



const Navbar = () => {
    let Navlinks =
    <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/allartcraftitems'>All Art & craft Items</NavLink>
        </li>
        <li>
            <NavLink to='/craftitem'>Add Craft Item</NavLink>
        </li>
        <li>
            <NavLink to='/myartcraftlist'>My Art&Craft List</NavLink>
        </li>
        <li>
            <NavLink to='/extra'>Extra section</NavLink>
        </li>
        <li>
            <NavLink to='/extra'>Extra section</NavLink>
        </li>
     
    </>
        let {user, logOut} = useContext(AuthContex)

        let handleLogout = ()=>{
            logOut()
            .then((result)=>{
                toast('logOut')
            })
            .catch()
        }
    return (

        <>
           <div className='container mx auto'>
                
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars/>
                            
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlinks}
                        </ul>
                        </div>
                        <Link className="btn btn-ghost text-xl font-worksans hidden md:flex lg:flex" to="/"> <LuTrees/>Forest Canvas</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-playfair">
                            {Navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    {
                        user 
                        ?
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <div className="avatar">
                                <div className="lg:w-20 md:w-16 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" }/>
                                </div>
                            </div>
                        </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/my-profile">My Profile</Link>
                                </li>
                                <li>
                                    <Link onClick={handleLogout}>Log Out</Link>
                                    <ToastContainer></ToastContainer>
                                </li>
                            </ul>
                        </div>
                        :
                        <Link className="btn bg-primaryColor font-playfair" to='/login'>Login</Link>

                    }
                    </div>
                </div>

           </div> 
        </>
    );
};

export default Navbar;