import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const dbConnect = process.env.DB_CONNECT;
    const client = await MongoClient.connect(dbConnect);
    const db = client.db();
    const zonesCollection = db.collection("new-zones");
    const result = await zonesCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Zone Inserted!" });
  }
}

export default handler;
