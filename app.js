const express = require ("express"); 
const db = require ("./db/db");
const router = require("./router");
const app = express(); 
const PORT = process.env.PORT || 3001; 
const cors = require("cors"); 

app.use(express.json());
app.use(cors(corsOptions));

app.use(router());

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };


app.listen(PORT, () => {
    console.log (`YEEEEAHHH RUNNING ON PORT ${PORT}`);
    db.authenticate()
        .then(() => {
            console.log("DB Conection => SUCCESS")
        })
        .catch((error) => {
            console.log ("Error: " + error);
        });
})