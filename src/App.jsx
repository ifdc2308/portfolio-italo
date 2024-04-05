import { React, useState } from "react";
import SearchAppBar from "./views/home";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
    <SearchAppBar />
      <Container fixed sx={{ width: "100vw" }}>
        
      </Container>
    </>
  );
}

export default App;
