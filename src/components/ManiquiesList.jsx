import ManiquiRow from './ManiquiRow'

function ManiquiesList({ maniquies }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha ensamblaje</th>
            <th>Cabeza</th>
            <th>Torso</th>
            <th>Brazo izq.</th>
            <th>Brazo der.</th>
            <th>Pierna izq.</th>
            <th>Pierna der.</th>
          </tr>
        </thead>
        <tbody>
          {maniquies.map((maniqui) => (
            <ManiquiRow key={maniqui.id_maniqui} maniqui={maniqui} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ManiquiesList