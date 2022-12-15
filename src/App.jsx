import React from "react"
import { SelecionarEstado, SelecionarMunicipio, MostrarInformacoes } from "./features"

function App() {
  return (
    <div>
      <SelecionarEstado />
      <SelecionarMunicipio />
      <MostrarInformacoes />
    </div>
  )
}

export default App
