import { MongoClient } from "mongodb";

import ConnectZoneList from "@/components/connections/ConnectZoneList";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Connect Zones</title>
        <meta
          name={"description"}
          content={"This project is designed to practice the basics of nextjs."}
        />
      </Head>
      <ConnectZoneList connectZones={props.zones} />;
    </>
  );
}

export async function getStaticProps() {
  const dbConnect = process.env.DB_CONNECT;
  const client = await MongoClient.connect(dbConnect);
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
    revalidate: 1, // to regenerate page to prevent using ex-data. seconds
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
