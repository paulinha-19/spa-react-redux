import React from "react"
import { NavBar, Footer, Layout, AlertApp, ContentApiSide } from "./components";
import InfoIcon from '@mui/icons-material/Info';

function App() {
  return (
    <div>
      <NavBar />
      <AlertApp
        content="Selecione um estado, um município e visualize as informações da
      microrregião, mesorregião, UF e região do município."
        textIcon="Info"
        startIcon={<InfoIcon />}
      />
      <Layout>
        <ContentApiSide />
      </Layout>
      <Footer />
    </div>
  )
}

export default App


