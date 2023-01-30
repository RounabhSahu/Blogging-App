import React, {useEffect, useState} from 'react';
import {collection, getDocs ,query,orderBy} from 'firebase/firestore';
import {db} from "../Firebase";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const postsCollectionsRef= collection(db, 'posts');
    const getPosts = async () => {
        const data = await getDocs(query(postsCollectionsRef,orderBy('timestamp','desc')));
        data.docs.map((post) => {
            console.log(post._document.createTime.toTimestamp().toDate().getDate());
        })
        setPosts(data.docs)
    }
    useEffect(() => {
        getPosts();
    }, []);
    
    return (
        <>
            {posts.map((post)=>(

                <div key={post.id} className="bg-amber-200 w-[500px] mx-auto my-20 p-6 rounded border-slate-500 border-x-2 text-center">
                    <h3 className="text-3xl py-2">{post.data().title}</h3>
                    <hr className="border-sky-800 border-b-1 rounded-3xl bg-clip-border"/>
                    <article className="bg-yellow-100/30 my-2">{post.data().post}</article>
                    <hr className="border-sky-800 border-b-1 rounded-3xl bg-clip-border"/>
                    <div className="flex flex-row justify-between">
                        <span>@ {post.data().author}</span>
                        <span>{post._document.createTime.toTimestamp().toDate().getDate()}-{post._document.createTime.toTimestamp().toDate().getMonth()+1}-{post._document.createTime.toTimestamp().toDate().getFullYear()}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Home;
