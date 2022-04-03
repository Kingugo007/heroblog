import { useContext, useState } from "react"
import  { Wrapper }  from "../../components/registerForm"
import FormRow from "../../components/form"
import axios from 'axios'
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"

export const Login = () => {
const urlLogin = 'https://ugheroblog.herokuapp.com/api/auth/login';
const initialState = {
  username: '',
  password: '',
  
}
const [values, setValues] = useState(initialState)
const [error, setError] = useState(false);
const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.target.name]: e.target.value })
}

const { user, dispatch } = useContext(Context)

// this function handlesubmit is reponsible for the login functionality
const handleSubmit = async (e) => {
e.preventDefault();
dispatch({type: "LOGIN_START"})
setError(false)

// "if statement" to handle submit if no values
if(values.username && values.password){
 try {
const res = await axios.post(urlLogin, {
username : values.username,
password: values.password
});

res.data && window.location.replace("/dashboard")
dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

 } catch(err) {
dispatch({ type: "LOGIN_FAILURE"})
console.log(err)
  setError(true)
 }
} else{
  setError(true)
 
}

}

  return (
    <>
      <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
          <h3>Login</h3>
          <p> {error && <span style={{color: 'red'}}>something went wrong!</span>} </p>
          <FormRow
            type='text'
            name='username'  
            placeholder="Enter your username"  
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
          Not a member ? <Link to="/register" style={{ color: '#4154f1'}}>Register</Link>
         </button>
        </p>
      
      </form>
      
    </Wrapper>
    </>
  )
    
}


