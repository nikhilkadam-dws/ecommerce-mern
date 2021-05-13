const express = require("express");
const app = express();
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

// Config the env
env.config();

// DataBase Connection
// mongodb+srv://admin:<password>@cluster0.f2jqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f2jqi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("DB Connected successfully!");
  });

// Middleware
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
