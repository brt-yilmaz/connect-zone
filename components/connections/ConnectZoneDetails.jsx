import styles from "./ConnectZoneDetails.module.css";

function ConnectZoneDetails(props) {
  return (
    <section className={styles.detail}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default ConnectZoneDetails;
