// place files you want to import through the `$lib` alias in this folder.
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv'
// KtXsjAQo3IlbgAXi
dotenv.config()
const uri = process.env.URI
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
