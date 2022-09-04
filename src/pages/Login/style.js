import styled from 'styled-components';

export const Login = styled.div`
  margin: 0px 88px;
  height: 100vh;
  overflow: hidden !important;
`
export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 80px;
  overflow: hidden;
`

export const Slogan = styled.div`
  position: absolute;
  right: 76ch;
  top: -350px;
  width: 75%;
  overflow: hidden;
`

export const LoginPart = styled.div`
  position: absolute;
  bottom: -500px;
  right: -700px;
  z-index: 0;
  overflow: hidden;
  
`

export const PhonePart = styled.div`
  position: absolute;
  bottom: -250px;
  left: -10px;
  z-index: 0;
  overflow: hidden;
  
  img {
    width: 650px;
  }
`