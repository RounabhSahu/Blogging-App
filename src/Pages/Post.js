import React, {useEffect, useState} from 'react';
import {addDoc, collection, Timestamp} from 'firebase/firestore';
import {db} from '../Firebase'
import {useNavigate} from "react-router-dom";

const Post = () => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [warn, setWarn] = useState('');
    const [warn2, setWarn2] = useState('');
    const [msg, setMsg] = useState('');
    const postsCollectionsRef= collection(db, 'posts');
    let navigate = useNavigate();
    const createPost=async ()=>{
        await addDoc(postsCollectionsRef,
            {
                title,
                post,
                author: localStorage.getItem('name'),
                timestamp: Timestamp.now().toDate()}).then(()=>{
            console.log("added post")}).catch(e=> {
            alert(e.target.value)
        })
    }
    const onSubmit=()=>{
        // console.log(title,post);
        if(title.trim().length<5 || title.length>20){
            setWarn2('');
            setWarn('Title must be between 5 and 20 characters');
        }
        else if (post.trim().length<10){
            setWarn('');
            setWarn2('Post must be at least 10 characters long');
        }
        else{
            setWarn('');
            setWarn2('');
            console.log(title,post,Timestamp.now().toDate());
            createPost();
            setMsg("Post added successfully");
            setTitle('')
            setPost('')
            setTimeout(()=>{
                navigate('/')
            },2500)
        }
    }
    useEffect(() => {

        if(!localStorage.getItem('isLoggedIn')) {

            window.location.replace('/login');
        }
        // const user=localStorage.getItem('name');
        // const uid=localStorage.getItem('uid');
    },[])

    return (
        <div className="bg-amber-200 w-fit mx-auto my-20 p-6 rounded border-slate-500 border-x-2 text-center">
            <h3 className="text-3xl py-2">Create Post</h3>
            <hr className="border-sky-800 border-b-1 rounded-3xl bg-clip-border"/>
            <div className="flex flex-col">
                <label className="text-xl text-left">Title</label>
                <input required="required" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Heading for your story ..." type="text" className="mt-1 text-lg align-middle py-1 pl-2 font-light rounded focus:bg-sky-100/80 focus:border-none focus:rounded-sm"/>
                {<p className="text-md pt-2 text-red-900/80">{warn}</p>}
                <label className="text-xl text-left">Post</label>
                <textarea required value={post} onChange={(e) => setPost(e.target.value)} placeholder="Your story goes here ..." className="h-96 w-[500px] align-middle mt-1 text-lg py-1 pl-2 font-light rounded focus:bg-sky-100/80 focus:border-none focus:rounded-sm"/>
                {<p className="text-md pt-2 text-red-900/80">{warn2}</p>}
                <button onClick={onSubmit} className="w-fit mx-auto mt-4 mb-0 text-xl py-2 bg-sky-200 px-4 py-2 rounded border-slate-700 border-2 hover:bg-slate-300 hover:scale-110">Submit</button>
                {msg}
            </div>
        </div>
    );
};

export default Post;
