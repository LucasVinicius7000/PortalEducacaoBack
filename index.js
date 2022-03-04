const express = require("express");

const app = express();

const defaultroutes = require("./app/routers/default");
const adminroutes = require("./app/routers/admin");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(defaultroutes);
app.use(adminroutes);

app.listen(3000, "localhost");
console.log("App Rodando");

