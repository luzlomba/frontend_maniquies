import { useState } from 'react'

function Assembler({ cabezas, torsos, brazos, piernas, modelosExtremidad }) {

  const [selection, setSelection] = useState({
    id_cabeza: null,
    id_torso: null,
    id_brazo_izq: null,
    id_brazo_der: null,
    id_pierna_izq: null,
    id_pierna_der: null
  })

  const handleSelect = (tipo, id) => {
    setSelection({ ...selection, [tipo]: id })
  }

  const brazosIzq = brazos.filter(b => {
    const modelo = modelosExtremidad.find(m => m.id_modelo === b.id_modelo)
    return modelo?.lado === 'izquierdo'
  })

  const brazosDer = brazos.filter(b => {
    const modelo = modelosExtremidad.find(m => m.id_modelo === b.id_modelo)
    return modelo?.lado === 'derecho'
  })

  const piernasIzq = piernas.filter(p => {
    const modelo = modelosExtremidad.find(m => m.id_modelo === p.id_modelo)
    return modelo?.lado === 'izquierdo'
  })

  const piernasDer = piernas.filter(p => {
    const modelo = modelosExtremidad.find(m => m.id_modelo === p.id_modelo)
    return modelo?.lado === 'derecho'
  })

  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
  setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="assembler">
      <h2>Ensamblador</h2>
      <div className="assembler-layout">

        <div className="assembler-left">
          <h3>Piezas disponibles</h3>
          <div className="assembler-sections">

            <div>
  <div className="accordion-header" onClick={() => toggleSection('cabezas')}>
    <span>Cabezas</span>
    <span>{openSection === 'cabezas' ? '▲' : '▼'}</span>
  </div>
  {openSection === 'cabezas' && cabezas.map(c => (
    <div key={c.id_cabeza}
      className={selection.id_cabeza === c.id_cabeza ? 'piece-option selected' : 'piece-option'}
      onClick={() => handleSelect('id_cabeza', c.id_cabeza)}>
      {c.nro_serie}
    </div>
  ))}
    </div>
        <div>
            <div className="accordion-header" onClick={() => toggleSection('torsos')}>
                <span>Torsos</span>
                <span>{openSection === 'torsos' ? '▲' : '▼'}</span>
            </div>
            {openSection === 'torsos' && torsos.map(t => (
                <div key={t.id_torso}
                className={selection.id_torso === t.id_torso ? 'piece-option selected' : 'piece-option'}
                onClick={() => handleSelect('id_torso', t.id_torso)}>
                {t.nro_serie}
                </div>
            ))}
            </div>

            <div>
            <div className="accordion-header" onClick={() => toggleSection('brazosIzq')}>
                <span>Brazos izquierdos</span>
                <span>{openSection === 'brazosIzq' ? '▲' : '▼'}</span>
            </div>
            {openSection === 'brazosIzq' && brazosIzq.map(b => (
                <div key={b.id_brazo}
                className={selection.id_brazo_izq === b.id_brazo ? 'piece-option selected' : 'piece-option'}
                onClick={() => handleSelect('id_brazo_izq', b.id_brazo)}>
                {b.nro_serie}
                </div>
            ))}
            </div>

            <div>
            <div className="accordion-header" onClick={() => toggleSection('brazosDer')}>
                <span>Brazos derechos</span>
                <span>{openSection === 'brazosDer' ? '▲' : '▼'}</span>
            </div>
            {openSection === 'brazosDer' && brazosDer.map(b => (
                <div key={b.id_brazo}
                className={selection.id_brazo_der === b.id_brazo ? 'piece-option selected' : 'piece-option'}
                onClick={() => handleSelect('id_brazo_der', b.id_brazo)}>
                {b.nro_serie}
                </div>
            ))}
            </div>

            <div>
            <div className="accordion-header" onClick={() => toggleSection('piernasIzq')}>
                <span>Piernas izquierdas</span>
                <span>{openSection === 'piernasIzq' ? '▲' : '▼'}</span>
            </div>
            {openSection === 'piernasIzq' && piernasIzq.map(p => (
                <div key={p.id_pierna}
                className={selection.id_pierna_izq === p.id_pierna ? 'piece-option selected' : 'piece-option'}
                onClick={() => handleSelect('id_pierna_izq', p.id_pierna)}>
                {p.nro_serie}
                </div>
            ))}
            </div>

            <div>
            <div className="accordion-header" onClick={() => toggleSection('piernasDer')}>
                <span>Piernas derechas</span>
                <span>{openSection === 'piernasDer' ? '▲' : '▼'}</span>
            </div>
            {openSection === 'piernasDer' && piernasDer.map(p => (
                <div key={p.id_pierna}
                className={selection.id_pierna_der === p.id_pierna ? 'piece-option selected' : 'piece-option'}
                onClick={() => handleSelect('id_pierna_der', p.id_pierna)}>
                {p.nro_serie}
                </div>
            ))}
            </div>
          </div>
        </div>

        <div className="assembler-right">
          <h3>Maniquí en construcción</h3>
          <p>Cabeza: {selection.id_cabeza || '-'}</p>
          <p>Torso: {selection.id_torso || '-'}</p>
          <p>Brazo izq: {selection.id_brazo_izq || '-'}</p>
          <p>Brazo der: {selection.id_brazo_der || '-'}</p>
          <p>Pierna izq: {selection.id_pierna_izq || '-'}</p>
          <p>Pierna der: {selection.id_pierna_der || '-'}</p>
        </div>

      </div>
      <button className="assemble-btn"
        onClick={() => console.log('Ensamblar:', selection)}>
        Ensamblar maniquí →
      </button>
    </div>
  )
}

export default Assembler