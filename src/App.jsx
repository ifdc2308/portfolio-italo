import { React } from "react";
import { Container, Box } from "@mui/material";
import ResponsiveAppBar from "./views/components/AppBar";
import Footer from "./views/components/Footer";

function App() {
  return (
    <Container maxWidth="xl">
        <ResponsiveAppBar />
        
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
