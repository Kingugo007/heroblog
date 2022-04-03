import { Link } from "react-router-dom"
import styled from "styled-components"
import errorImg from "../../assets/pictures/error.png"

export const  ErrorPage = () => {
    return (
        <Error>
         <ErrorImg src={errorImg} />
         <ErrorText>404</ErrorText>
        <Link to="/">Return Home</Link>
        </Error>
       

    )
}

const Error = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;
`

const ErrorImg = styled.img`
width: 30em;
height: 20em;

@media screen and (max-width: 480px) {
    width: 16em;
    height: 12em;
}
`
const ErrorText = styled.h1`
 font-size: 60px;
 color:black;
 margin: 10px;
`