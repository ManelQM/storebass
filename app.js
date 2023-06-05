const express = require("express");
const morgan = require("morgan");
const logger = require("./config/winston");
const db = require("./db/db");
const router = require("./router");
const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 3001; // PORT CONFIG

// CONFIG CORS OPTIONS

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//MIDDLEWARE
app.use(morgan("combined", { stream: logger.stream}));
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {res.send("Willkommen aus Express")})
app.use(router);



app.listen(PORT, () => {
  console.log(`Welcome to StoreBass at Port ${PORT}`);

  db.then(() => {
    console.log("Nice to see you again (DB connected)");
  }).catch((error) => {
    console.log("THIS THING BETWEEN US ITS NOT WORKING: " + error);
  });
});

// app.listen(PORT, () => {
//     console.log (`YEEEEAHHH RUNNING ON PORT ${PORT}`);
//     db.authenticate()
//         .then(() => {
//             console.log("DB Conection => SUCCESS")
//         })
//         .catch((error) => {
//             console.log ("Error: " + error);
//         });
// })
