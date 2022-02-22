const express = require("express");
const bodyParser = require("body-parser");
const googlePlace = require("./routes/googlePlace");
const photo = require("./routes/photo")
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("", googlePlace);
app.use("", photo);

app.listen(3001);
