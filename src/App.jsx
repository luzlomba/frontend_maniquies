import { useState } from 'react'
import PiezasList from './components/PiezasList'
import ManiquiesList from './components/ManiquiesList'
import Sidebar from './components/Sidebar'
import './App.css'
import { cabezas, torsos, brazos, piernas, modelosPieza, modelosExtremidad, materiales, colores, maniquies } from './data/data'
import Assembler from './components/Assembler'

function App() {

  const [filter, setFilter] = useState('todas')
  const [view, setView] = useState('piezas')

  const getPieceData = (pieza) => {
  const isExtremity = pieza.tipo === 'brazo' || pieza.tipo === 'pierna'
  const modelos = isExtremity ? modelosExtremidad : modelosPieza
  const modelo = modelos.find(m => m.id_modelo === pieza.id_modelo)
  const material = materiales.find(m => m.id_material === modelo?.id_material)
  const color = colores.find(c => c.id_color === modelo?.id_color)
  return { ...pieza, material: material?.nombre, color: color?.nombre, modelo }
  }

  const allPieces = [...cabezas, ...torsos, ...brazos, ...piernas].map(getPieceData)

  const filteredPieces = filter === 'todas' 
    ? allPieces 
    : allPieces.filter(p => p.tipo === filter)

  return (
  <div className="layout">
    <Sidebar setView={setView} />
    <main className="content">
      <h1>Fábrica de Maniquíes</h1>

      {view === 'piezas' && (
        <>
          <div className="filters">
            <button className={filter === 'todas' ? 'active' : ''} 
              onClick={() => setFilter('todas')}>Todas</button>
            <button className={filter === 'cabeza' ? 'active' : ''} 
              onClick={() => setFilter('cabeza')}>Cabezas</button>
            <button className={filter === 'torso' ? 'active' : ''} 
              onClick={() => setFilter('torso')}>Torsos</button>
            <button className={filter === 'brazo' ? 'active' : ''} 
              onClick={() => setFilter('brazo')}>Brazos</button>
            <button className={filter === 'pierna' ? 'active' : ''} 
              onClick={() => setFilter('pierna')}>Piernas</button>
          </div>
          <PiezasList piezas={filteredPieces} />
        </>
      )}

      {view === 'maniquies' && (
        <ManiquiesList maniquies={maniquies} />
      )}

      {view === 'ensamblador' && (
        <Assembler 
          cabezas={cabezas}
          torsos={torsos}
          brazos={brazos}
          piernas={piernas}
          modelosExtremidad={modelosExtremidad}
        />
      )}

    </main>
  </div>
)
}

export default App