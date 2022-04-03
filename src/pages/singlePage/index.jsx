import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Comment } from "../../components/comments";
import { Footer } from "../../components/footer";

export  const  SinglePost = () => { 
const postUrl = "https://ugheroblog.herokuapp.com/api/posts"
const imgUrl = "https://ugheroblog.herokuapp.com/images/"

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState('');

 const getPost = async () => {
      const res = await axios.get(`${postUrl}/${path}`);
      setPost(res.data);
    };
 useEffect(() => {
       getPost();
  }, [path]);   

  return (
      <>
   <PostContainer>
      <PostImg src={imgUrl + post.photo} />
      <PostTitle>
          {post.title}
      </PostTitle>
      <PostInfo>
          <span>
              Creator: <b>{post.username}</b>
          </span>
           <span>
              {new Date(post.createdAt).toDateString()}
          </span>
      </PostInfo>
      <PostDesc>
         <p>{post.desc}</p> 
      </PostDesc>
  </PostContainer>
  <Comment path={path} post={post} getPost={getPost}/>
  <Footer />
  </>
    );
}

const PostContainer = styled.div`
 
  `
const PostImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;  
`

const PostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: "Jost", sans-serif;
  font-size: 28px;  
`

const PostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: grey;
  
  span {
      padding: 0.25em;
  }
 `
const PostDesc = styled.div`
display: flex;
width: 95vw;
margin: auto;
 p{
   font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 75px;
 }
 
`


