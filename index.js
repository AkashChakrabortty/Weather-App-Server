const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

// mongo
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kusbv.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
    const allCitiesCollection = client
      .db("Weather-App")
      .collection("allCitiesInfo");
  try {
   
  } catch {}
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("api found");
});
app.listen(port, () => {
  console.log("server running");
});
