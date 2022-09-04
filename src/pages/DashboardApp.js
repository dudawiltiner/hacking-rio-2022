import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai'
// components
import { nameAct } from '../store';
import Page from '../components/Page';
// sections
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [name] = useAtom(nameAct)
  const history = useNavigate();
  document.body.style.overflow = "auto"

  if(name === ''){
    history('/login')
  }

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5, mt:-5 }}>
          Olá, Bem vindo(a) de volta!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Taxa de Emissão" color="success" total={30} icon={'mdi:molecule-co2'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Energia Economizada" total={40} color="info" icon={'ic:baseline-energy-savings-leaf'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Certificado ECO" total={2} color="warning" icon={'el:certificate'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Lugares para Manutenção Elétrica" total={2} color="error" icon={'fa-solid:tools'} />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: index ,
                title: `Hotel Sonar do Vale ${index}`,
                description: "São Paulo",
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: `${50 - index}%`,
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppCurrentSubject/>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Consumo de Energia"
              subheader="(+43%) no último ano"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[

                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Espaços de maior consumo de Energia"
              chartData={[
                { label: 'Piscina', value: 4344 },
                { label: 'Estacion...', value: 5435 },
                { label: 'Entrada', value: 1443 },
                { label: 'Recepção', value: 4443 },
              ]}
              chartColors={[
                "#FF6C40",
                "#B72136",
                "#25855A",
                "#FFC107",
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={7}>
            <AppConversionRates/>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            <AppOrderTimeline
              title="Metas do Ano"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Meta 5 de Consumo de Energia',
                  'Meta 4 de Redução',
                  'Meta 3 de Manutenção',
                  'Meta 2 de Consumo de Energia',
                  'Meta 1 de Redução',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
