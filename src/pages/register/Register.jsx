import { useState } from "react"
import  { Wrapper }  from "../../components/registerForm"
import FormRow from "../../components/form"
import axios from 'axios'
import { Link } from "react-router-dom"

export const Register = () => {
const registerUrl = 'https://ugheroblog.herokuapp.com/api/auth/register'
const initialState = {
  username: '',
  email: '',
  password: '',
  
}
const [values, setValues] = useState(initialState)
const [error, setError] = useState(false);

const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

// handleSubmit function send user info to the database by updating the initialSatae values
const handleSubmit = async (e) => {
e.preventDefault();
setError(false)

if(values.password && values.username && values.email){ 
try {
const res = await axios.post(registerUrl, {
username : values.username,
email: values.email,
password: values.password
});

res.data && window.location.replace("/login")

 } catch(err) {
  setError(true)
 }
} else{
  setError(true)
  console.log('no values')
}

} 
    return (
      <>
       <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Register</h3>
        <p> {error && <span style={{color: 'red'}}>something went wrong!</span>} </p>

          <FormRow
            type='text'
            name='username'  
            placeholder="Enter your username"  
            handleChange={handleChange}        
          />
                
       <FormRow
          type='email'
          name='email'
          placeholder="Enter your valid email"
          handleChange={handleChange}
          />
            
        <FormRow
          type='password'
          name='password'
          placeholder="Enter your secret password" 
         handleChange={handleChange}        
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
         <button type="button" className="member-btn" >
          Already a member ? <Link to="/login" style={{ color: '#4154f1'}}>Login</Link>
         </button>
        </p> 
      </form>
      
    </Wrapper>
    </>
  )
    
}