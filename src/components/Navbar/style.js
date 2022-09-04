import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 88px 0px 0px;
`

export const Logo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    margin-left: 10px
  }
`

export const Tab = styled.div`
  display: flex;
  position: relative;
  z-index: 999;

  button {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.06em;
    border: none;
    background-color: transparent;
  }

  button.register {
    margin-left: 96px;
  }
`
