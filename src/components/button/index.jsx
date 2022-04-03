import styled from "styled-components";

const ButtonWrapper = styled.button`
padding: ${({ small }) => (small ? "5px 8px" : "7px 56px")};
border-radius: 5px;
background-color: #ffffff; 
color: white;
font-weight: bold;
font-family: 'Poppins', sans-serif;
text-transform: uppercase;
font-size: ${({ small }) => (small ? "12px" : "16px")};
outline: none;
border: 2px solid transparent;
transition: all 220ms ease-in-out;
cursor: pointer;

&:hover{
 color: #ffffff;
 background-color: transparent;
 border: 2px solid white;
 

}
`

export const Button = (props) => {
 
return (
   <ButtonWrapper {...props}>{props.children}</ButtonWrapper>

)
}