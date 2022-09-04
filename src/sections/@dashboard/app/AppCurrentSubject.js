import { Card, CardHeader, FormControlLabel, Switch } from '@mui/material';
// components

// ----------------------------------------------------------------------

export default function AppCurrentSubject() {
  

  const areas = ["Área de Serviço","Área de Estacionamento", "Área do Jardim Externo", "Área da Piscina", "Área de Corredor Leste","Área de Corredor Norte", "Área do Jardim Interno",]

  return (
    <Card>
      <CardHeader title={"Ativar/Desativar a Energia"}/>

      <div>
      {
        areas.map((el, idx) =>
        <div style={{margin: "16px 40px"}} key={idx}>
          <FormControlLabel control={<Switch defaultChecked />} label={el} />
        </div>
        )
      }
      </div>
    </Card>
  );
}
