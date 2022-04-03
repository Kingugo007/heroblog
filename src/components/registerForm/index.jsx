import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
   }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: black;
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`

export const WrapperWrite = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 .form {
    max-width: 1000px;
 }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: black;
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`