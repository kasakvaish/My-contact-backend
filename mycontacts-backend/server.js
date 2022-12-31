const express = require('express');
const connectDb = require("./config/dbConnection");
const multer = require('multer');
const ErrorHandler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config();




connectDb();
const app = express();




const port = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
  res.status(200).json({message :"get all contacts"});
})


app.use(express.json());
app.use(multer({dest:'/tmp/'}));
app.use("/api/contacts", require("./routes/contactRoutes"));

// app.use("/api/users", require("./routes/userRoutes"));

app.use(ErrorHandler);8




app.listen(port, () => {

  console.log(`Server running on port ${port}`);

});