import React, { useState } from 'react'
const initState = {
    email:"",
    password:""
}
export const Login = () => {
    const [user,setUser] = useState(initState);
    const handleChnage = (e) =>{
        const {name,value} = e.target;
        setUser(prev=>({
            ...prev, [name]:value
        }))
    }
    const handleSubmit = async () => {
        try {
            let res = await fetch(`https://mysterious-dungarees-hare.cyclic.app/users/login`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            let data = await res.json();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <input type="text" name="email" value={user.email} onChange={handleChnage}/><br/>
                <input type="text" name="password" value={user.password} onChange={handleChnage}/>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
