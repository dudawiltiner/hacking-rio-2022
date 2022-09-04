// routes
import { Provider } from 'jotai'
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <Provider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
