import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';
import ResponsiveAppBar from './views/components/AppBar';
import Footer from './views/components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <ResponsiveAppBar />
        <AppRoutes />
        {/* <Footer /> */}
      </Container>
    </Router>
  );
}

export default App;