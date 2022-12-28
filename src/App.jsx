import React from "react"
import { SelectState, SelectCity, InformationCity } from "./features";
import { NavBar } from "./components/NavBar";
import { InfoApp } from "./components/InfoApp/index";
import { Footer } from "./components/Footer/index";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <NavBar />
      <InfoApp />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", flex: 1 }}>
        <Container maxWidth="sm" >
          <Box maxWidth="sm" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <SelectState />
            <SelectCity />
            <InformationCity />
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  )
}

export default App
