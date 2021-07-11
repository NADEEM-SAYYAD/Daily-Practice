import React,{useEffect} from 'react'
import axios from 'axios'

const UeseEffect = () => {
    useEffect(()=>{
       const getUsers = async () =>{
            const usersData = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(usersData.data);
       }
       getUsers();
    },[])
    useEffect(()=>{
        const getPosts = async () =>{
             const usersPosts = await axios.get('https://jsonplaceholder.typicode.com/posts')
             console.log(usersPosts.data);
        }
        getPosts();
     },[])
    return (
        <div>
            UeseEffect
        </div>
    )
}
export default UeseEffect;