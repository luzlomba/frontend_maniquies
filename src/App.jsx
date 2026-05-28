import { cabezas, torsos, brazos, piernas } from './data/data'
import { useState } from 'react'
import PiezasList from './components/PiezasList'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const todasLasPiezas = [...cabezas, ...torsos, ...brazos, ...piernas]
  const [filtro, setFiltro] = useState('todas')

  const piezasFiltradas = filtro === 'todas' 
    ? todasLasPiezas 
    : todasLasPiezas.filter(p => p.tipo === filtro)

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <h1>Fábrica de Maniquíes</h1>
        <div className="filtros">
          <button onClick={() => setFiltro('todas')}>Todas</button>
          <button onClick={() => setFiltro('cabeza')}>Cabezas</button>
          <button onClick={() => setFiltro('torso')}>Torsos</button>
          <button onClick={() => setFiltro('brazo')}>Brazos</button>
          <button onClick={() => setFiltro('pierna')}>Piernas</button>
        </div>
        <PiezasList titulo="Piezas" piezas={piezasFiltradas} />
      </main>
    </div>
  )
}

export default App