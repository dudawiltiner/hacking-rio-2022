import React from 'react'
import { useAtom } from 'jotai'
import RegisterScreen from '../../components/Register'
import { tabAct } from '../../store'
import LoginScreen from '../../components/LoginScreen'
import Navbar from '../../components/Navbar'
import * as S from './style'


export default function Login() {
  const [tab] = useAtom(tabAct)

  document.body.style.overflow = "hidden"

  return (
    <S.Login title="Login">
      <Navbar />
      <S.Main>
        {tab === "login" ?
          <LoginScreen /> :
          <RegisterScreen />
        }
      </S.Main>
      <S.Slogan>
        <img src="./Slogan.svg" alt="slogan" />
      </S.Slogan>
      <S.LoginPart>
        <img src="./Ellipse.svg" alt="ellipse" />
      </S.LoginPart>
      <S.PhonePart>
        <img src="./phone.png" alt="phone" />
      </S.PhonePart>
    </S.Login>
  )
}
