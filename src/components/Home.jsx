import React, { useEffect, useState } from 'react'

export const Home = () => {
    const [posts,setPosts] = useState([]);

    const fetchPostData = async () => {
        try {
            let res = await fetch(`https://mysterious-dungarees-hare.cyclic.app/posts`)
            let data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchPostData()
    },[])
    console.log(posts)
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
