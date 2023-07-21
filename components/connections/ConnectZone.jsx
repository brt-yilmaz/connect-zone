import Image from "next/image";
import Card from "../ui/Card";
import styles from "./ConnectZone.module.css";

function ConnectZone(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={styles.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ConnectZone;
