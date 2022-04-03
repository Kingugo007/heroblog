import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  padding: 0 2em;
  display: flex; 
  align-items: center;
  justify-content: space-between;
 position: fixed;
  top: 0;
 `;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-family: 'Poppins', sans-serif;
 
  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

const RegisterButton = styled(Link)`

border-radius: 5px;
background-color: #ffffff; 
color: black;
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

  @media screen and (max-width: 480px) {
          padding: 5px 8px;
        }

`



export const PageNav = (props) => {
const { user } = useContext(Context)
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        {!user && <RegisterButton  to="/register" >Be a writer</RegisterButton>}
        {user && <RegisterButton  to="/dashboard" > {`${user.username.substr(0,2)} Records`} </RegisterButton>}
        <Marginer direction="horizontal" margin="8px" />
        {!user && <LoginButton small><Link to="/login" style={{ color: "white",}}>Login</Link></LoginButton>}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
