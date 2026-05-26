import PiezaCard from './PiezaCard'

function PiezasList({ titulo, piezas }) {
  return (
    <div>
      <h2>{titulo}</h2>
      {piezas.map((pieza) => (
        <PiezaCard key={pieza.id_cabeza || pieza.id_torso || pieza.id_brazo || pieza.id_pierna} pieza={pieza} />
      ))}
    </div>
  )
}

export default PiezasList