import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import ResponsiveAppBar from './views/components/AppBar';
import Footer from './views/components/Footer';
import AppRoutes from './routes/AppRoutes';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="xl">
          <ResponsiveAppBar />
          <AppRoutes />
          {/* <Footer /> */}
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
