const express = require("express");
const db = require("./db/db");
const router = require("./router");
const app = express();
const cors = require("cors"); 
const PORT = process.env.PORT || 3001; // PORT CONFIG

// const morgan = require("morgan");
// const logger = require("./config/winston");

// CONFIG CORS OPTIONS
app.use(cors(corsOptions));
app.use(express.json());

// ROUTES
app.use(router);

// CONFIG CORS OPTIONS 

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.listen(PORT, () => {
  console.log(`Welcome to StoreBass at Port ${PORT}`);

  db.then(() => {
    console.log("Nice to see you again (DB connected)");
  }).catch((error) => {
    console.log("THIS THING BETWEEN US ITS NOT WORKING: " + error);
  });
});


