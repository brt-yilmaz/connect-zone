import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "Post") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://beratyilmaz3102:<Izmitli41*>@nextjs-basics.qwe55xu.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const zonesCollection = db.collection("new-zones");
    const result = await zonesCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Zone Inserted!" });
  }
}
