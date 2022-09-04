import { Button, CircularProgress, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { nameAct } from '../../store'
import { fetchAuthUser } from '../../service/userAPI'
import * as S from './style'


export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPasswod] = useState('')
  const [, setName] = useAtom(nameAct)
  const history = useNavigate();


  async function handleClick() {
    setLoading(true)
    const response = await fetchAuthUser(email, password)
    console.log(response)
    setName("Hotel Sonar")
    setLoading(false)
    history("/")
  }

  return (
    <div style={{marginRight: "100px", zIndex: "1", marginTop: "60px"}}>
      <S.Title>Login</S.Title>

      <S.Forms>
        <FormControl fullWidth >
          <TextField
            label="Qual é o seu email?"
            id="standard-size-normal"
            size="normal"
            variant="standard"
            onChange={(e)=> setEmail(e.target.value)}
            margin="dense"
          />
          <div 
            style={{margin: "10px 0px"}}
          />
          <TextField
            label="Digite a sua senha"
            id="standard-size-normal"
            size="normal"
            variant="standard"
            type="password"
            margin="normal"
            onChange={(e)=> setPasswod(e.target.value)}
          />
          <S.Password>
            <p>Esqueceu a senha?</p>
          </S.Password>
          
          <Button onClick={() => handleClick()} variant="contained" color="primary">
              {loading ? <CircularProgress size={24} color="inherit"/> : "Entrar"}
          </Button>
            
        </FormControl>
      </S.Forms>
    </div>
  )
}
