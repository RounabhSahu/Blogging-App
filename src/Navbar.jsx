import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-300 py-2 flex flex-row justify-center space-x-10  border-b-2 border-b-cyan-800">
            <Link to="/" className="py-2 px-4 border border-2 border-slate-700 bg-amber-200 rounded hover:bg-lime-300 hover:scale-110">Home</Link>
            {localStorage.getItem('isLoggedIn') && <Link to="/post" className="py-2 px-4 border border-2 border-slate-700 bg-amber-200 rounded hover:bg-lime-300 hover:scale-110">Create Post</Link>}
            {!localStorage.getItem('isLoggedIn') && <Link to="/login" className="py-2 px-4 border border-2 border-slate-700 bg-amber-200 rounded hover:bg-lime-300 hover:scale-110">Login</Link>}
            {localStorage.getItem('isLoggedIn') && <Link to="/logout" className=" flex flex-row py-2  px-4 border border-2 border-slate-700 bg-amber-200 rounded hover:bg-lime-300 hover:scale-110">
                {localStorage.getItem('name')}
                <img src={localStorage.getItem('profile')} alt="profile pic" className="rounded h-7 mx-2 my-auto"/>
            </Link>}
        </nav>
    );
};

export default Navbar;
