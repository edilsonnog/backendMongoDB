const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./src/routes");

const app = express();

mongoose.connect(
  "mongodb+srv://ttalzero:ff0VfDho1tuEfLlo@cluster0.agu4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo Db Conectado com Sucesso");
    }
  }
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3003, function () {
  console.log("Servidor Iniciou com Sucesso");
});
