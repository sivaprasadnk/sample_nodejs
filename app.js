const http = require("http");

const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: false}));


const adminRoutes =require("./routes/admin");
const userRoutes =require("./routes/shop");

app.use(adminRoutes);
app.use(userRoutes);

app.listen(3500);