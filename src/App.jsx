import './App.css'
import { cabezas, torsos, brazos, piernas } from './data/data'
import PiezasList from './components/PiezasList'

function App() {
  return (
    <>
      <h1>Fábrica de Maniquíes</h1>
      <PiezasList titulo="Cabezas" piezas={cabezas} />
      <PiezasList titulo="Torsos" piezas={torsos} />
      <PiezasList titulo="Brazos" piezas={brazos} />
      <PiezasList titulo="Piernas" piezas={piernas} />
    </>
  )
}

export default App