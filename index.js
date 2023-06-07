require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes/Routes");
const app = express();
const port = process.env.DB_PORT || 8000;

var corsOption = {
  origin: "http://127.0.0.1",
  methods: "*",
  allowedHeaders: "*",
};

app.use(cors(corsOption));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("halo");
});

app.use(router);

app.listen(port, () => {
  console.log(`server listening at port: ${port}`);
});
