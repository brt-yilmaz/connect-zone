import ConnectZoneList from "@/components/connections/ConnectZoneList";

const DUMMY_ZONES = [
  {
    id: "z1",
    title: "First Zone",
    image:
      "https://media.istockphoto.com/id/494226648/de/foto/uzung%C3%B6l.jpg?s=612x612&w=0&k=20&c=UwICSjpbM3wcEfUmT6YunhgtYS3eGDc1G6rM-qDcRUA=",
    address: " uzungol 1234 tranbzon / Turkiye",
    description: "This is a first place to connect",
  },
  {
    id: "z2",
    title: "Second Zone",
    image:
      "https://media.istockphoto.com/id/1211210967/de/foto/kloster-sumela-in-trabzon-t%C3%BCrkei-das-griechisch-orthodoxe-kloster-sumela-wurde-im-4.jpg?s=612x612&w=0&k=20&c=1QmE8JnhTQKn7-566xQ78rWWF4M0txTB0U-kzVKy8Ks=",
    address: " uzungol 1234 trabzon / Turkiye",
    description: "This is a second place to connect",
  },
];

function HomePage() {
  return <ConnectZoneList connectZones={DUMMY_ZONES} />;
}

export default HomePage;
