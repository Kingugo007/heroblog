// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// import followLogo from "../../assets/logo/f.png"

const LogoContainer = styled.div`
display: flex;
flex-direction: ${({ inline }) => inline ? "row" : "column"};
align-items: ${({ inline }) => inline && "center"} ;
align-items: center;
`

const LogoImg = styled.img`
width: 8em;
height: 8em;

${({ inline }) => inline && css`
 width: 28px;
 height: 28px;
 `} 

${({ small }) => small && css`
 width: 5em;
 height: 5em;
`} 
`
const LogoText = styled.div`
font-size: 20px;
color: #f8f8f8;
font-weight: ${({ inline }) => inline ? 500 : 700};
font-family: 'Poppins', 'Sans-serif';
text-transform: uppercase;
letter-spacing: 0.45em;

    @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-left: 0;
}
` 

export const Logo = (props) => {
const { inline, small } = props

return (
    <LogoContainer inline={inline} small={small}>
       {/* <Link to="/"> <LogoImg img src={followLogo} alt="follow up" small={small} inline={inline} /></Link> */}
      <Link to='/'>
        <LogoText>HEROBLOG</LogoText>  
     </Link> 
    </LogoContainer>
    
)

}