import { React, useState } from "react";
import "./App.css";
import SearchAppBar from "./views/home";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Container fixed sx={{ width: "100vw" }}>
        <SearchAppBar />
      </Container>
    </>
  );
}

export default App;
