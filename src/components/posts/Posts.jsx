import { Post } from "../post/Post";
import styled from "styled-components";

const BlogPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0rem;
    align-items: center;
   `

 const Title = styled.h1`
  font-size: 30px;
  font-family: 'Jost', 'sans-serif';
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  margin: 2em 0em;
 `
 const BlogContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 `

export const Posts = ({ posts }) => {
  return (
    <BlogContainer>
          <Title>news and events</Title> 
    <BlogPosts>     
    {
     posts.map((post, index) => (
      <Post key={index} post={post}/>
        ))
    }          
    </BlogPosts>
    </BlogContainer>   
  );
}

