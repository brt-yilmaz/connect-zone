import Link from "next/link";
import styles from "./MainNavigation.module.css";
import Image from "next/image";
import logo from "../../public/logo.svg";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt={"logo"} width={90} height={90} />
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
