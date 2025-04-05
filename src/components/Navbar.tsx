import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink 
            to="/home" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Contato
          </NavLink>  
        </li>
      </ul>
    </nav>
  )
}
