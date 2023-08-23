import Link from "next/link";
import styles from "./MainNavigation.module.css";
import logo from "../../public/connectLogo.svg";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Zones</Link>
          </li>
          <li>
            <Link href="/new-connectZone">Add New Zone</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
