import { useContext, useEffect, useState } from "react"
import { WrapperWrite }  from "../../components/registerForm"
import axios from 'axios'
import styled from "styled-components"
import { Context } from "../../context/Context"


export  const Write = ({ getPosts, editBlog }) => {
const {user} = useContext(Context)  
const postUrl = 'https://ugheroblog.herokuapp.com/api/posts/';
const url = "https://ugheroblog.herokuapp.com/api";
const imgUrl = "https://ugheroblog.herokuapp.com/images/"
const [title, setTitle] = useState('')
const [desc, setDesc] = useState('')
const [file, setFile] = useState('')

 useEffect(() =>{
        if(editBlog){
        // const editImg = imgUrl+editBlog.photo
            setTitle(editBlog.title ? editBlog.title : '')
            setDesc(editBlog.desc ? editBlog.desc : '')
            setFile(editBlog.photo ? imgUrl+editBlog.photo : '')
        }

    },[editBlog])
// this function handlesubmit is reponsible for the login functionality
const handleSubmit = async (e) => {
e.preventDefault();
    const newBlog = {
            username: user.username,
            title,
            desc,
          } 
      //Adding an image
      if (file) {
       const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      // Adding a new property to newBlog object
      newBlog.photo = filename;
      try {
        await axios.post(`${url}/upload`, data);
        } catch (err) {
        console.log(err)
      }
    }
     //Only post if editTodoData is not provided
        if(!editBlog){
            await axios.post(postUrl, newBlog)
        } else{
            //Update the data if we do have the ediTodoData
            await axios.put(`https://ugheroblog.herokuapp.com/api/posts/${editBlog._id}`, newBlog)
      }

        setTitle('');
        setDesc('')
        setFile('')

        getPosts();
                           
}
  return (
    <>
     <WrapperWrite>
      <form className='form' onSubmit={handleSubmit}>
          <h3>Add an article</h3>
            <label className='form-label'>
        Post Title
         </label>
         
         {editBlog ? <PostImg src={file} /> : file && (
           <PostImg src={URL.createObjectURL(file)} alt="" />
           )}
         
                <div className="form-row">
                    <input type="text" className="form-input"
                        placeholder="Enter Title..." 
                         required
                         value={title}
                         onChange={e => setTitle(e.target.value)}
                        />
                </div>
        <label htmlFor="fileInput" className="form-label" style={{ cursor: "pointer"}}>
            Add image +
          </label>
            <div className="form-row">
            <input
            type="file"
            
            id="fileInput"
            className="form-input"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <label className='form-label'>
        Post description
         </label>
        <StyledTextarea
        value={desc}
        name='desc'
        rows={6}
        cols={33}
        placeholder="A Blog description"
        onChange={(e) => setDesc(e.target.value)} 
        />   
                
         
        <button type='submit' className='btn btn-block'>
          Add article
        </button>     
      </form>    
    </WrapperWrite>
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

const PostImg = styled.img`
  width: 70vw;
  height: 250px;
  object-fit: cover;
`

 