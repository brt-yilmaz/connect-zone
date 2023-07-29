import { MongoClient } from "mongodb";

import ConnectZoneList from "@/components/connections/ConnectZoneList";

function HomePage(props) {
  return <ConnectZoneList connectZones={props.zones} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://beratyilmaz:VNoimoaNs9gHOZJY@cluster0.edkqulq.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const zonesCollection = db.collection("new-zones");
  const zonesArray = await zonesCollection.find().toArray();
  client.close();

  return {
    props: {
      zones: zonesArray.map((zone) => ({
        title: zone.title,
        image: zone.image,
        address: zone.address,
        id: zone._id.toString(),
      })),
    },
    revalidate: 10, // to regenerate page to prevent using ex-data. seconds
  };
}

/* to send updated data for every request
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch from an Api
  return {
    props: {
      zones: DUMMY_ZONES,
    },
  };
}
*/

export default HomePage;
