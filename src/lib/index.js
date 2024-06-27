// place files you want to import through the `$lib` alias in this folder.
import { MongoClient, ServerApiVersion } from "mongodb";
// KtXsjAQo3IlbgAXi
const uri =
  "mongodb+srv://calumaaldridge:KtXsjAQo3IlbgAXi@cluster0.pra84ua.mongodb.net/?appName=Cluster0";
// @ts-ignore
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


const dbName = "wcdb";
// @ts-ignore
let db
export const connectToDatabase = async () => {
  // @ts-ignore
  if (!db) {
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db(dbName);
  }
  return db
};
