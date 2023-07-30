import { MongoClient, ObjectId } from "mongodb";
import ConnectZoneDetails from "@/components/connections/ConnectZoneDetails";
import { useRouter } from "next/router";
import Head from "next/head";

function ConnectZoneId(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{props.connectZoneData.title}</title>
        <meta
          name={"description"}
          content={props.connectZoneData.description}
        />
      </Head>
      <ConnectZoneDetails
        img={props.connectZoneData.image}
        title={props.connectZoneData.title}
        address={props.connectZoneData.address}
        description={props.connectZoneData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.DB_CONNECT);
  const db = client.db();
  const zonesCollection = db.collection("new-zones");
  const zonesIdArray = await zonesCollection
    .find({})
    .project({ _id: 1 })
    .toArray();
  client.close();
  return {
    fallback: false,
    paths: zonesIdArray.map((zone) => ({
      params: {
        connectZoneId: zone._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single zone
  const zoneId = context.params.connectZoneId;

  const client = await MongoClient.connect(process.env.DB_CONNECT);
  const db = client.db();
  const zonesCollection = db.collection("new-zones");
  const selectedZone = await zonesCollection.findOne({
    _id: new ObjectId(zoneId),
  });
  client.close();

  return {
    props: {
      connectZoneData: {
        id: selectedZone._id.toString(),
        title: selectedZone.title,
        image: selectedZone.image,
        description: selectedZone.description,
        address: selectedZone.address,
      },
    },
  };
}

export default ConnectZoneId;
