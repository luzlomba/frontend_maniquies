function ManiquiRow({ maniqui }) {
  return (
    <tr>
      <td>{maniqui.codigo}</td>
      <td>{maniqui.fecha_ensamblaje}</td>
      <td>{maniqui.id_cabeza}</td>
      <td>{maniqui.id_torso}</td>
      <td>{maniqui.id_brazo_izq}</td>
      <td>{maniqui.id_brazo_der}</td>
      <td>{maniqui.id_pierna_izq}</td>
      <td>{maniqui.id_pierna_der}</td>
    </tr>
  )
}

export default ManiquiRow