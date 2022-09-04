import PropTypes from 'prop-types';
// @mui
import { Box, Card, CardHeader } from '@mui/material';

// ----------------------------------------------------------------------

AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function AppConversionRates({ ...other }) {

  return (
    <Card {...other}>
      <CardHeader title={"Localização"} />

      <Box sx={{ mx: 3, mt:2, mb: 2 }} dir="ltr">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470400.4108997528!2d-43.7261877754711!3d-22.913252440376965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1662261462097!5m2!1sen!2sbr" width="600" height="450"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myiFrame" />
      </Box>
    </Card>
  );
}
