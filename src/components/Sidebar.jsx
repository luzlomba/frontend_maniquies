function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>MANIQUÍES</h2>
        <p>FÁBRICA</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>Inicio</li>
          <li>Ensamblador</li>
          <li>Piezas</li>
          <li>Maniquíes</li>
          <li>Materiales</li>
          <li>Colores</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <a href="mailto:fabrica_de_maniquies@gmail.com">📧 Contacto</a>
      </div>
    </aside>
  )
}

export default Sidebar