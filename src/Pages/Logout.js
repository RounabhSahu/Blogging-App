import React, {useEffect} from 'react';
import {signOut} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import {auth} from "../Firebase";

const Logout = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        // console.log(localStorage.getItem('isLoggedIn'),'55')
        if(!localStorage.getItem('isLoggedIn')) {
            console.log("running logout->login")
            window.location.replace('/login');
        }
    }, []);

    const signOutWithGoogle=()=>{

        signOut(auth).then(()=>{


            localStorage.clear();
            props.setIsLoggedIn(false);
            navigate('/login');
            alert("signed out successful");
        }).catch((e)=>{
            alert(e.message)
        })
    }
    return (
        <div className="bg-amber-200 w-fit mx-auto my-40 p-6 rounded border-slate-500 border-x-2 text-center">
            <img src={localStorage.getItem('profile')} alt="profile pic" className="rounded-md p-0.5 mx-auto my-auto border-y-4 border-x-2 border-cyan-800"/>
            <h3 className="text-3xl py-2">Welcome , {localStorage.getItem('name')}</h3>

            <button onClick={signOutWithGoogle} className="text-xl py-2 bg-sky-200 px-4 py-2 rounded border-slate-700 border-2 hover:bg-slate-300 hover:scale-110">Sign Out</button>
        </div>
    );
};

export default Logout;
