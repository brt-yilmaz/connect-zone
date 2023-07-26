import ConnectZoneDetails from "@/components/connections/ConnectZoneDetails";
import { useRouter } from "next/router";

function ConnectZoneId() {
  const router = useRouter();

  return (
    <ConnectZoneDetails
      img={
        "https://media.istockphoto.com/id/494226648/de/foto/uzung%C3%B6l.jpg?s=612x612&w=0&k=20&c=UwICSjpbM3wcEfUmT6YunhgtYS3eGDc1G6rM-qDcRUA="
      }
      title={"A First Connect Zone"}
      address={"Uzungol 1234 tranbzon / Turkiye"}
      description={"The Connect Zone Description"}
    />
  );
}

export default ConnectZoneId;
