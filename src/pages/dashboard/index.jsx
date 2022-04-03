import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ViewPost } from '../../components/viewPosts/ViewPosts';
import { Write } from '../write/Write';
import axios from 'axios';

import { Context } from '../../context/Context';

export const Dashboard = () => { 
const postUrl = "https://ugheroblog.herokuapp.com/api/posts/"
const [posts, setPosts] = useState([]);
const [editBlog, setEditBlog] = useState(null)

const { user, dispatch } = useContext(Context)

const getPosts = async () => {
 try{
  const blogPosts = await axios.get(`${postUrl}/?user=${user.username}`)
   setPosts(blogPosts.data)
   setEditBlog("")   
  } catch(err) {
     console.log(err)
 }
}

const editPost = (blog) => {
   setEditBlog(blog)
}

const handleLogout = () => {
        dispatch({ type: "LOGOUT"})
        localStorage.clear()
     
    }

return ( 
   <DashboardStyled> 
     <UserInfo>
      <Title>
       Hi <span>{user.username} </span>
        </Title>
        <LogoutBtn onClick={handleLogout} >Logout</LogoutBtn> 
     </UserInfo>
             
      <Write getPosts={getPosts} editBlog={editBlog}/>
      <ViewPost posts={posts} setPosts={setPosts} getPosts={getPosts} editPost={editPost} setEditBlog={setEditBlog}/>
   </DashboardStyled>     
  );
  } 

const UserInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100px;
   margin-top: 100px;
   margin-bottom: 100px;
`

const LogoutBtn = styled.button`
font-size: 1.2rem;
color: white;
background-color: #a6270d;
border: none;
padding: 0.5rem 1.5rem;
border-radius: 35px;
text-transform: capitalize;
font-family: 'Jost', 'Sans-serif';
letter-spacing: 0.5rem;
cursor: pointer;
`
const DashboardStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 95vw;
margin: auto;
`
const Title = styled.h1`
   font-size: 20px;
   text-align: center;
   font-family: 'Jost', sans-serif;
   font-weight: 600;
  
   color: grey;
   span{
   font-size: 20px;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Jost', sans-serif;
   font-weight: 600;
   letter-spacing: 0.25em;
    padding-left: 8px;
    color: black;
    
   }
`


