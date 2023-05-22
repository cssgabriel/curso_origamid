import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={styles.link} to="/" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/contato">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
