import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogPost = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const PostImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;

@media screen and (max-width: 480px) {
    width: 16em;
    height: 12em;
}
`
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PostTitle = styled.h1`
  font-family: "Jost", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;

  span{
    font-size: 12px;
    color: grey;
    text-transform: capitalize;
    margin-left: 1rem;
  }
`
const PostDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: black;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  
` 

export const Post = ({ post })  => {

const PF = "https://ugheroblog.herokuapp.com/images/"

       return (
        <BlogPost>
        <PostImg src={ PF+post.photo} alt="" />
      <PostInfo>
        <Link to={`/post/${post._id}`} >  
          <PostTitle>
             {post.title}
             <span>{new Date(post.createdAt).toDateString()}</span>
           </PostTitle> 
        </Link>                
         </PostInfo>
       <PostDesc>{post.desc.substr(0, 100)}</PostDesc>
        
    </BlogPost>
    
    
  );
}



