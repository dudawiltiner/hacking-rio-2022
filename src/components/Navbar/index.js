import React from 'react'
import { useAtom } from 'jotai'
import { Button } from '@mui/material'
import { tabAct } from '../../store'
import * as S from './style'


export default function Navbar() {
  const [tab, setTab] = useAtom(tabAct)

  return (
    <S.Navbar style={{zIndex: "1"}}>
        <S.Logo>
          <img width="30px" src="./logo.svg" alt="Logo"/>
          <img width="100px" src="./EcoHost.svg" alt="Logo"/>
        </S.Logo>

        <S.Tab>
          <Button type="button" style={{color: `${tab === 'login' ? '#2A8DBD' : '#1D1F20'}`}} onClick={() => setTab('login')}>Entrar</Button>
          <Button type="button" style={{color: `${tab === 'register' ? '#2A8DBD' : '#1D1F20'}`}} onClick={() => setTab('register')} className="register">Registrar</Button>
        </S.Tab>
      </S.Navbar>
  )
}
