import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./api";
import cors from "cors";
import { database } from "./db/connection";
import { firestore } from "firebase-admin";
const app = express();
const port = 8111;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", apiRoutes());

const testFirestoreConnection = async () => {
  try {
    const collections: firestore.CollectionReference[] =
      await database.listCollections();
    if (!collections) {
      throw new Error("FireStore not connect yet");
    }
    if (collections) {
      console.log(collections.map((collection) => collection.id));
    }
  } catch (error) {
    console.error("❌ Firestore connection failed:", error);
  }
};

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}!`);
  testFirestoreConnection();
});
