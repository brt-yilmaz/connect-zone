import ConnectZone from "./ConnectZone";
import classes from "./Connection.module.css";

function ConnectZoneList(props) {
  return (
    <ul className={classes.list}>
      {props.connectZones.map((zone) => (
        <ConnectZone
          key={zone.id}
          id={zone.id}
          image={zone.image}
          title={zone.title}
          address={zone.address}
        />
      ))}
    </ul>
  );
}

export default ConnectZoneList;
