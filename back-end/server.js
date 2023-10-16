const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://dhinakaran75493:dhina123@cluster0.zfg0tml.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });



app.listen(4000, () => {
  console.log("server started on port 5000");
});