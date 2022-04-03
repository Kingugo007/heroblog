import styled from "styled-components"
import axios from "axios";
import { useEffect } from "react";

export const ViewPost = ({ posts, getPosts, editPost }) => {
const postUrl = "https://ugheroblog.herokuapp.com/api/posts"

const deletePost = async (postId) =>{
await axios.delete(`${postUrl}/${postId}`)

getPosts(); 
}

useEffect(() => {
 getPosts()

},[])

return (
        <ViewPostContainer>
        <Text>Your have: 
          <span>          
          {posts.length} {posts.length === 1 ? "article" : "articles"} {posts.length < 1 && " | add articles"}
          </span>
        </Text>
      
  { posts.map((post, index) => (
  <PostRow key={post._id}>
     <PostTitle><span>Title: </span> {post.title}</PostTitle> 
      <PostDesc><span>Description: </span> {post.desc.substr(0, 90)}</PostDesc>
      <ButtonDelete onClick={() => deletePost(post._id)}>Delete</ButtonDelete>
      <ButtonEdit onClick={() => editPost(post)}>Edit</ButtonEdit>
  </PostRow>
  )) }
          
        </ViewPostContainer>
    )
}

const Text = styled.h1`
    font-family: 'Jost', 'sans-serif';
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    margin: 3rem 0px;

    span{
    font-family: 'Poppins', 'sans-serif';
    font-size: 18px;
    text-transform: none;
    text-align: center;
    margin-left: 1em;
    }
`

const ViewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;  
`
const PostRow = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 padding: 2rem;
 border: 1px solid grey;
 margin: 2em 0em;

   @media screen and (max-width: 480px) {
   flex-direction: column;
  }
`;

const PostTitle = styled.h1`
  flex: 3;
  font-family: 'Jost', 'sans-serif';
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;

const PostDesc = styled.p`
 flex: 7;
  font-family: 'Poppins', 'sans-serif';
  font-size: 16px;
  span{
     font-family: 'Jost', 'sans-serif';
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  }


  `;

const ButtonDelete =  styled.button`
         flex: 1;
         margin: 1em;
         background-color: #d62323;
         border: none;
          color: white;
          cursor: pointer;
          font-size: 16px;
          padding: 0.5em 2rem;
          font-family: 'Poppins', sans-serif;

          &:hover{
              background-color: #690c0c;
              color: white;
          }
     `

 const ButtonEdit = styled.button`

     flex: 1;
     border: none;
      margin: 1em;
      background-color: green;
          cursor: pointer;
          font-size: 16px;
          padding: 0.5em 2rem;
          color: white;
          font-family: 'Poppins', sans-serif;
          &:hover{
              background-color: #094d09;
              color: white;
          }
 `
      
 