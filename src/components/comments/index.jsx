import axios from "axios";
import { useState } from "react";
import styled from "styled-components"

export const Comment = ({ path, post, getPost }) => {
const [name, setName] = useState("")
const [comment, setComment] = useState("")
const [blogComments, setBlogComments] = useState([])

const commentUrl = "https://ugheroblog.herokuapp.com/api/comments"

     const getComment = async () => {
      const res = await axios.get(`${commentUrl}/?path=${path}`);
      setBlogComments(res.data);
       setName('')
     setComment('')
    };
 
const handleSubmit = async (e) => {
    e.preventDefault();
    const  comments = {
                name: name,
                comment: comment,
                postId : path
            }   
    try{
     await axios.post(commentUrl, comments)     
     setName('')
     setComment('')
     getComment()

    } catch(err){
        console.log(err)
    }
}

 return ( 
     <>
  <CommentContainer>
      <NOofComments>{blogComments.length} Comments</NOofComments>
   {
       blogComments.map((com, index) =>  (
        <CommentInfo key={index}>
        <CommentTitle><span>Name: </span> {com.name}</CommentTitle>
        <CommentPara><span>Comment: </span>{com.comment}</CommentPara>
         <CommentPara><span>Date: </span>{new Date(com.createdAt).toDateString()}</CommentPara>
       </CommentInfo>
       ))
   }
  </CommentContainer>
      <form className='form' onSubmit={handleSubmit} >
          <h5>Say something about the post</h5>
            <label className='form-label'>
      Your name
         </label>
                <div className="form-row">
                    <input type="text" className="form-input"
                        placeholder="Enter your name..." 
                        value={name}
                         required
                         onChange={e => setName(e.target.value)}
                        />
                </div>
               <label className='form-label'>
       your comment
         </label>
        <StyledTextarea
        value={comment}
         rows={6}
        cols={33}
        placeholder="Comment...."
        onChange={(e) => setComment(e.target.value)} 
        />           
         
        <button type='submit' className='btn btn-block'>
         comment
        </button>     
      </form>
      </>
 )
}

const StyledTextarea = styled.textarea`
   width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  `;


const NOofComments = styled.h3`
    font-family: 'poppins', sans-serif;
    font-size: 30px;
    text-transform: capitalize;
    text-align: center;
    font-weight: 600;
`
const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`
const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  margin: 10px;
  padding: 0.5em 1em;
`
const CommentTitle = styled.h1`
    font-family: 'poppins', sans-serif;
    font-size: 18px;
    text-transform: capitalize; 
    
    span{
        font-family: 'Jost', sans-serif;
        font-size: 20px;
        text-align: left;
        text-transform: capitalize;
        font-weight: 600;
    }
`
const CommentPara = styled.p`
    font-family: 'poppins', sans-serif;
    font-size: 16px;
    text-transform: capitalize; 

      span{
        font-family: 'Jost', sans-serif;
        font-size: 20px;
        text-align: left;
        text-transform: capitalize;
        font-weight: 600;
    }
`
