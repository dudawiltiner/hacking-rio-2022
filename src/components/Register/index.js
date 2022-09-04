import { Alert, Button, CircularProgress, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { tabAct } from '../../store'
import { fetchRegisterUser } from '../../service/userAPI'
import * as S from './style'

export default function RegisterScreen() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [, setTab] = useAtom(tabAct)
  const [loading, setLoading] = useState(false)
  const [hasAlert, setHasAlert] = useState(false)
  const [password, setPasswod] = useState('')

  async function handleClick() {
    setLoading(true)
    const response = await fetchRegisterUser(name, email, password)
    console.log(response)

    if(!response.data) {
      setHasAlert(true)
    } else if(response.data.message === "completed sucessfully") {
      setTab('login')
    } else {
      setHasAlert(true)
    }
    setLoading(false)
  }

  return (
    <div style={{marginRight: "100px", zIndex: "1", marginTop: "35px"}}>
      <S.Title>Registrar</S.Title>

      <S.Forms>
        <FormControl fullWidth >
          <TextField
            label="Qual é o seu nome?"
            id="standard-size-normal"
            size="normal"
            variant="standard"
            onChange={(e)=> setName(e.target.value)}
            margin="dense"
          />
          <div 
            style={{margin: "10px 0px"}}
          />
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

          <S.Password />
          
          <Button onClick={() => handleClick()} variant="contained" color="primary">
            {loading ? <CircularProgress size={24} color="inherit"/> : "Registrar"}
          </Button>
        </FormControl>
      </S.Forms>
      { hasAlert &&
      <Alert onClose={() => setHasAlert(false)} style={{marginTop: "16px"}} variant="filled" severity="error">
        Ocorreu algum erro, verfique os campos.
      </Alert>
      }
    </div>
  )
}
