import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import { Posts } from "../../components/posts/Posts"
import axios from "axios"
import { Footer } from "../../components/footer";

export const Home = () => {
const postUrl = "https://ugheroblog.herokuapp.com/api/posts"


const [posts, setPosts] = useState([])
 
const getPosts = async () => {
 try{
  const data = await axios.get(`${postUrl}/`)
  setPosts(data.data)
  
 } catch(err) {
     console.log(err)
 }
}

useEffect(() => {
 getPosts()    
},[])
    return (
        <>
        <Header />
        <Posts posts={posts}/>
        <Footer />
        </>
        
    )
}