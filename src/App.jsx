import React from "react"
import { SelectState, SelectCity, InformationCity } from "./features";
import { NavBar, Footer, Layout, AlertApp } from "./components";
import InfoIcon from '@mui/icons-material/Info';

function App() {
  return (
    <div>
      <NavBar />
      <Layout>
        <AlertApp
          content="Selecione um estado, um município e visualize as informações da
      microrregião, mesorregião, UF e região do município."
          textIcon="Info"
          startIcon={<InfoIcon />}
        />
        <SelectState />
        <SelectCity />
        <InformationCity />
      </Layout>
      <Footer />
    </div>
  )
}

export default App
